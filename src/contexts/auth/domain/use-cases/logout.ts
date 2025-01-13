import { AuthRepository } from "@/contexts/auth/domain/AuthRepository";
import { LogoutPayload } from "@/contexts/auth/domain/types/logoutTypes"; 

export const logoutUseCase = (authRepository : AuthRepository) => ({ token }: LogoutPayload) => authRepository.logout({ token})
