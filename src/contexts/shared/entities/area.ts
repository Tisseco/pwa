import { ContainerSize, UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type Area = {
  id: UniqueId
  siteId: UniqueId
  size: ContainerSize
  description: string
  coordinates: {
    latitude: number
    longitude: number
  }
}
