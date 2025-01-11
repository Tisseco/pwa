import { Role, UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type AuthAccessToken = Readonly<{
  id: UniqueId
  tokenable_id: UniqueId
  type: 'bearer'
  name: string
  hash: string
  abilities: Role[]
  createdAt : string
  updatedAt : string
  lastUsedAt: string | null
  expiresAt: string
}>
