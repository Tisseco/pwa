import { UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type Area = {
  id: UniqueId
  siteId: UniqueId
  size: number
  description: string
  coordinates: {
    latitude: number
    longitude: number
  }
}
