interface ConsistencyByDay {
  [date: string]: {
    workoutDayCompleted: boolean
    workoutDayStarted: boolean
  }
}

const MONTH_LABELS_PT: Record<number, string> = {
  0: 'Jan',
  1: 'Fev',
  2: 'Mar',
  3: 'Abr',
  4: 'Mai',
  5: 'Jun',
  6: 'Jul',
  7: 'Ago',
  8: 'Set',
  9: 'Out',
  10: 'Nov',
  11: 'Dez',
}

function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function buildHeatmapData(): {
  label: string
  year: number
  weeks: Date[][]
}[] {
  const today = new Date()

  const startDay = new Date(today)
  startDay.setFullYear(today.getFullYear() - 1)

  const cursor = new Date(startDay)
  const dow = cursor.getDay()
  if (dow !== 0) {
    cursor.setDate(cursor.getDate() - dow)
  }

  const allWeeks: Date[][] = []
  while (cursor <= today) {
    const week: Date[] = []
    for (let i = 0; i < 7; i++) {
      week.push(new Date(cursor))
      cursor.setDate(cursor.getDate() + 1)
    }
    allWeeks.push(week)
  }

  const monthsData: {
    label: string
    monthIndex: number
    year: number
    weeks: Date[][]
  }[] = []

  for (const week of allWeeks) {
    const sunday = week[0]
    const monthIndex = sunday.getMonth()
    const year = sunday.getFullYear()
    const label = MONTH_LABELS_PT[monthIndex]

    let monthGroup = monthsData.find(
      (month) => month.monthIndex === monthIndex && month.year === year
    )
    if (!monthGroup) {
      monthGroup = { label, monthIndex, year, weeks: [] }
      monthsData.push(monthGroup)
    }
    monthGroup.weeks.push(week)
  }

  return monthsData.map((month) => ({
    label: month.label,
    year: month.year,
    weeks: month.weeks,
  }))
}

function getCellStyle(date: Date, consistencyByDay: ConsistencyByDay): string {
  const key = formatDate(date)
  const data = consistencyByDay[key]

  if (!data) {
    return 'border border-border'
  }

  if (data.workoutDayCompleted) {
    return 'bg-primary'
  }

  if (data.workoutDayStarted) {
    return 'bg-primary/20'
  }

  return 'border border-border'
}

export function useConsistencyHeatmap(consistencyByDay: ConsistencyByDay) {
  const months = buildHeatmapData()
  const getStyle = (date: Date) => getCellStyle(date, consistencyByDay)

  return { months, getStyle }
}
