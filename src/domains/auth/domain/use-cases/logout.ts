import { AuthRepository } from "@/domains/auth/domain/AuthRepository";
import { LogoutPayload } from "@/domains/auth/domain/types/logoutTypes"; 

export const logoutUseCase = (authRepository : AuthRepository) => ({ token }: LogoutPayload) => authRepository.logout({ token})
