import { Date, ScheduledTourStatus, UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type ScheduledTour = {
  id: UniqueId
  tourId: UniqueId
  assignedTo: UniqueId
  scheduledBy: UniqueId
  scheduledFor: Date
  status: ScheduledTourStatus
  vehicleId: UniqueId
}
