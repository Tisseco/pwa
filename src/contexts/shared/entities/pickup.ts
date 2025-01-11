import { UniqueId, FillingLevel, ContainerCondition } from "@/contexts/shared/entities/shared-kernel"

export type Pickup = {
  id: UniqueId
  areaId: UniqueId
  scheduledTourId: UniqueId
  fillingLevel: FillingLevel
  condition: ContainerCondition
  pickedUpAt: string
  weight: number
}
