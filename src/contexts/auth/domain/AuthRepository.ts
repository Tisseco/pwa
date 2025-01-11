import { LoginPayload, LoginError, LoginSuccess } from "@/contexts/auth/domain/types/loginTypes"
import { LogoutError, LogoutPayload, LogoutSuccess } from "@/contexts/auth/domain/types/logoutTypes"

export interface AuthRepository {

    login({ email, password }: LoginPayload): Promise<LoginSuccess | LoginError>

    logout({ token }: LogoutPayload): Promise<LogoutSuccess | LogoutError>

}
