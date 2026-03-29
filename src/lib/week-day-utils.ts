const WEEK_DAY_ORDER: Record<string, number> = {
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
  SATURDAY: 5,
  SUNDAY: 6,
}

export function sortByWeekDay<T extends { weekDay: string }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    const orderA = WEEK_DAY_ORDER[a.weekDay] ?? 999
    const orderB = WEEK_DAY_ORDER[b.weekDay] ?? 999
    return orderA - orderB
  })
}
