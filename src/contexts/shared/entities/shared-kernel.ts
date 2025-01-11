export type UniqueId = number

export type Role =
  | 'SUPERADMIN'
  | 'ADMIN'
  | 'SUPERVISOR'
  | 'DRIVER'
  | 'OPERATOR'

export type ScheduledTourStatus =
  | 'PENDING'
  | 'IN PROGRESS'
  | 'STOPPED'
  | 'FINISHED'

  export type VehicleType =
  | 'CAR'
  | 'TRUCK'

export type VehicleStatus =
  | 'IN SERVICE'
  | 'UNDER REPAIR'
  | 'OUT OF SERVICE'

export type VehicleFuelType =
  | 'GAZOLE'
  | 'ESSENCE'

export type SiteType =
  | 'SORTING CENTER'
  | 'SHOP'
  | 'CONTAINER'

export type AreaSize =
  | 'SMALL'
  | 'LARGE'

export type ContainerStatus =
  | 'IN SERVICE'
  | 'UNDER REPAIR'
  | 'OUT OF SERVICE'

export type ContainerCondition =
  | 'VERY GOOD CONDITION'
  | 'GOOD CONDITION'
  | 'AVERAGE CONDITION'
  | 'TO CHANGE'
  | 'TO CHANGE URGENTLY'

export type ContainerKey =
  | 'KA1-12'
  | 'KA4'
  | 'C5'
  | 'KA17-5'
  | 'KA16'
  | 'KA2-8'
  | 'KA15-6'
  | 'CF3'
  | 'PARIS'
  | 'NONE'

export type ContainerColor =
  | 'G'
  | 'M'
  | 'B'
  | 'WS'

export type ContainerSize =
  | 'SMALL'
  | 'LARGE'

export type FillingLevel =
  | 'EMPTY'
  | 'ALMOST EMPTY'
  | 'HALF FULL'
  | 'NEARLY FULL'
  | 'FULL'
