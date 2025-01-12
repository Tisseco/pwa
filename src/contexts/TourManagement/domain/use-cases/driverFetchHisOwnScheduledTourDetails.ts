import { Token } from "@/contexts/auth/domain/types/authSharedTypes";
import { ScheduledTourDetailsRepository } from "@/contexts/TourManagement/domain/ScheduledTourDetailsRepository";

export const driverFetchHisOwnScheduledTourDetailsUseCase = (tourManagementRepository: ScheduledTourDetailsRepository) => (token: Token['token']) => tourManagementRepository.getAllScheduledTourDetailsByAssignedUser(token)
