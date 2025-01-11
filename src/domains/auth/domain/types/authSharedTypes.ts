import { AuthAccessToken } from "@/domains/shared/entities/authAccessToken"

export type Token = Readonly<Pick<AuthAccessToken, 'abilities' | 'expiresAt' | 'lastUsedAt' | 'name' | 'type'> & { token: string }>
