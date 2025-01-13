import { Date, Role, UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type AuthAccessToken = Readonly<{
  id: UniqueId
  tokenable_id: UniqueId
  type: 'bearer'
  name: string
  hash: string
  abilities: Role[]
  createdAt : Date
  updatedAt : Date
  lastUsedAt: Date | null
  expiresAt: Date
}>
