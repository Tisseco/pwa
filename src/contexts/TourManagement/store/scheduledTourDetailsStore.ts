import { create } from "zustand"
import { persist } from "zustand/middleware"
import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails"

export type ScheduledTourDetailsList = {
  scheduledTourDetailsList: ScheduledTourDetails[] | null
}

export type ScheduledTourDetailsActions = {
  storeScheduledTourDetailsList: (scheduledTourDetails: ScheduledTourDetails[]) => void
}

export const useScheduledTourDetailsStore = create<ScheduledTourDetailsList & ScheduledTourDetailsActions>()(
  persist(
    (set) => ({
      scheduledTourDetailsList: null,
      storeScheduledTourDetailsList: (scheduledTourDetailsList) => set(() => ({ scheduledTourDetailsList })),
    }),
    { name: 'scheduledTourDetails' }
  )
)
