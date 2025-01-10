import { User } from "@/domains/shared/entities/user"
import { Token } from "@/domains/auth/domain/types/authSharedTypes"

export type LoginPayload = Readonly<Pick<User, 'email' | 'password'>>

export type LoginSuccess = Token

export type LoginError = Readonly<{
  errors: {
    message: string
  }[]
}>
