import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails";

export interface ScheduledTourDetailsRepository {
  
  getAllScheduledTourDetailsByAssignedUser(assignedUser: ScheduledTourDetails["assignedTo"]): Promise<ScheduledTourDetails[] | { errors: { message: string }[] }>

}
