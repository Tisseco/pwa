import { LoginPayload, LoginError, LoginSuccess } from "@/domains/auth/domain/types/loginTypes"

export interface AuthRepository {

    login({ email, password }: LoginPayload): Promise<LoginSuccess | LoginError>

}
