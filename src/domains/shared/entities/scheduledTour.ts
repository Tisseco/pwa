import { ScheduledTourStatus, UniqueId } from "@/domains/shared/entities/shared-kernel"

export type ScheduledTour = {
  id: UniqueId
  tourId: UniqueId
  assignedTo: UniqueId
  scheduledBy: UniqueId
  scheduledFor: string
  status: ScheduledTourStatus
  vehicleId: UniqueId
}
