import { AuthAccessToken } from "@/domains/shared/entities/authAccessToken"
import { User } from "@/domains/shared/entities/user"

export type Token = Readonly<Pick<AuthAccessToken, 'abilities' | 'expiresAt' | 'lastUsedAt' | 'name' | 'type'> & { token: string }>

export type LoginPayload = Readonly<Pick<User, 'email' | 'password'>>

export type LoginSuccess = Token

export type LoginError = Readonly<{
  errors: {
    message: string
  }[]
}>
