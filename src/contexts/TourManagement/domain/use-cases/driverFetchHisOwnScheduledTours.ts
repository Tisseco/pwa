import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails";
import { ScheduledTourDetailsRepository } from "@/contexts/TourManagement/domain/ScheduledTourDetailsRepository";

export const driverFetchHisOwnScheduledTourDetailsUseCase = (tourManagementRepository: ScheduledTourDetailsRepository) => (assignedUser: ScheduledTourDetails["assignedTo"]) => tourManagementRepository.getAllScheduledTourDetailsByAssignedUser(assignedUser)
