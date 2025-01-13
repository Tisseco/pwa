import { AuthRepository } from "@/contexts/auth/domain/AuthRepository";
import { LoginPayload } from "@/contexts/auth/domain/types/loginTypes";

export const loginUseCase = (authRepository : AuthRepository) => ({ email, password }: LoginPayload) => authRepository.login({ email, password })
