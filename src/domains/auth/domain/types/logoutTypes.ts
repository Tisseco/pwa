import { Token } from "@/domains/auth/domain/types/authSharedTypes"

export type LogoutPayload = Readonly<{
  token: Token['token']
}>

export type LogoutSuccess = Readonly<{
  message: 'success'
}>

export type LogoutError = Readonly<{
  errors: { message: string }[]
}>
