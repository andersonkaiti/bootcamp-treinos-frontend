'use server'

import {
  completeWorkoutSession,
  createWorkoutSession,
} from '@http/api-client-generated'
import { revalidatePath } from 'next/cache'

export async function startWorkoutAction(workoutPlanId: string, dayId: string) {
  await createWorkoutSession(workoutPlanId, dayId)
  revalidatePath(`/workout-plans/${workoutPlanId}/day/${dayId}`)
}

export async function completeWorkoutAction(
  workoutPlanId: string,
  dayId: string,
  sessionId?: string
) {
  if (!sessionId) return

  await completeWorkoutSession(workoutPlanId, dayId, sessionId, {
    completedAt: new Date().toISOString(),
  })
  revalidatePath(`/workout-plans/${workoutPlanId}/day/${dayId}`)
}
