import { UniqueId } from "@/domains/shared/entities/shared-kernel"

export type TourStep = {
  id: UniqueId
  siteId: UniqueId
  tourId: UniqueId
  order: number
}
