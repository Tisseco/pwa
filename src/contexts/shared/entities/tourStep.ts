import { UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type TourStep = {
  id: UniqueId
  siteId: UniqueId
  tourId: UniqueId
  order: number
}
