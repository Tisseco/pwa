import { LoginPayload, LoginError, LoginSuccess } from "@/domains/auth/domain/types/loginTypes"
import { LogoutError, LogoutPayload, LogoutSuccess } from "@/domains/auth/domain/types/logoutTypes"

export interface AuthRepository {

    login({ email, password }: LoginPayload): Promise<LoginSuccess | LoginError>

    logout({ token }: LogoutPayload): Promise<LogoutSuccess | LogoutError>

}
