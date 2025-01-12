import { ScheduledTourDetailsRepository } from "@/contexts/TourManagement/domain/ScheduledTourDetailsRepository";

export const driverFetchHisOwnScheduledTourDetailsUseCase = (tourManagementRepository: ScheduledTourDetailsRepository) => () => tourManagementRepository.getAllScheduledTourDetailsByAssignedUser()
