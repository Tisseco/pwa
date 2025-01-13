import { UniqueId, FillingLevel, ContainerCondition, Date } from "@/contexts/shared/entities/shared-kernel"

export type Pickup = {
  id: UniqueId
  areaId: UniqueId
  scheduledTourId: UniqueId
  fillingLevel: FillingLevel
  condition: ContainerCondition
  pickedUpAt: Date
  weight?: number | null
}
