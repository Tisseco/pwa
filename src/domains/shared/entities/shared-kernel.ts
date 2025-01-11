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
