import { User } from "@/contexts/shared/entities/user";
import { ScheduledTourDetailsRepository } from "@/contexts/TourManagement/domain/ScheduledTourDetailsRepository";
import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails";

export class InMemoryScheduledTourDetailsRepository implements ScheduledTourDetailsRepository {
    
  private dataSource;
  // currentUserId is here simulate backend logic for retrieving user ID from token
  private currentUserId;
    
  constructor(dataSource: ScheduledTourDetails[], currentUserId: User['id']){
    this.dataSource = dataSource
    this.currentUserId = currentUserId
  }

  // Implement token in func parameters in future
  getAllScheduledTourDetailsByAssignedUser(): Promise<ScheduledTourDetails[] | { errors: { message: string }[] }> {
    return new Promise((resolve) => {
      const scheduledTourDetailsList = this.dataSource.filter(scheduledTourDetails => scheduledTourDetails.id === this.currentUserId)
      
      if (scheduledTourDetailsList) return resolve(scheduledTourDetailsList)
      
      resolve({
        errors: [
          {
            message: 'Unauthorized access'
          }
        ]
      })
    })
  }

}
