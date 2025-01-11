import { ScheduledTourDetailsRepository } from "../domain/ScheduledTourDetailsRepository";
import { ScheduledTourDetails } from "../domain/aggregates/scheduledToursDetails";

export class InMemoryScheduledTourDetailsRepository implements ScheduledTourDetailsRepository {
    
  private dataSource;
    
  constructor(dataSource: ScheduledTourDetails[]){
    this.dataSource = dataSource
  }
  
  getAllScheduledTourDetailsByAssignedUser(assignedUserId: ScheduledTourDetails['id']): Promise<ScheduledTourDetails[] | { errors: { message: string }[] }> {
    return new Promise((resolve) => {
      const scheduledTourDetailsList = this.dataSource.filter(scheduledTourDetails => scheduledTourDetails.id === assignedUserId)
      
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
