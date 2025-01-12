import { AuthRepository } from "@/domains/auth/domain/AuthRepository";
import { LoginPayload } from "@/domains/auth/domain/types/loginTypes";

export const loginUseCase = (authRepository : AuthRepository) => ({ email, password }: LoginPayload) => authRepository.login({ email, password })
