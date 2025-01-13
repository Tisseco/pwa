import { SiteType, UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type Site = {
  id: UniqueId
  type: SiteType
  addressId: UniqueId
}
