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
