import { UniqueId } from "@/contexts/shared/entities/shared-kernel"

export type Address = {
  id: UniqueId
  name: string
  streetNumber: number
  streetNumberExtension: string | null
  streetName: string
  city: string
  zipCode: number
  department: string
  stateCode: number
  coordinates: {
    latitude: number
    longitude: number
  }
}
