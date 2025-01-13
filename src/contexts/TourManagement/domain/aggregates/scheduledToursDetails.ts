import { Address } from "@/contexts/shared/entities/address"
import { Area } from "@/contexts/shared/entities/area"
import { Container } from "@/contexts/shared/entities/container"
import { Pickup } from "@/contexts/shared/entities/pickup"
import { ScheduledTour } from "@/contexts/shared/entities/scheduledTour"
import { Site } from "@/contexts/shared/entities/site"
import { Tour } from "@/contexts/shared/entities/tour"
import { TourStep } from "@/contexts/shared/entities/tourStep"
import { User } from "@/contexts/shared/entities/user"
import { Vehicle } from "@/contexts/shared/entities/vehicle"

export type ScheduledTourDetails = ScheduledTour & {
  userAssigned: User
  userScheduler: User
  vehicle: Vehicle
  tour: Tour & {
    tourSteps: (TourStep & {
      site: Site & {
        areas: (Area & {
          container: Container
        })[]
        address: Address
      }
    })[] 
  }
  pickups: Pickup[]
}
