import { Token } from "@/contexts/auth/domain/types/authSharedTypes";
import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails";

export interface ScheduledTourDetailsRepository {
  
  getAllScheduledTourDetailsByAssignedUser(token: Token['token']): Promise<ScheduledTourDetails[] | { errors: { message: string }[] }>

}
