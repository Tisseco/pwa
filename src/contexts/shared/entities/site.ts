import { SiteType, UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type Site = {
  id: UniqueId
  name: string
  type: SiteType
  addressId: UniqueId
}
