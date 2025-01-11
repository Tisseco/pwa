import { ContainerColor, ContainerCondition, ContainerKey, ContainerSize, ContainerStatus, UniqueId } from "@/domains/shared/entities/shared-kernel"

export type Container = {
  id: UniqueId
  status: ContainerStatus
  condition: ContainerCondition
  size: ContainerSize
  areaId: UniqueId
  color: ContainerColor
  key: ContainerKey
}
