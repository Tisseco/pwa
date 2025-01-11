import { UniqueId } from "@/domains/shared/entities/shared-kernel"

export type Address = {
  id: UniqueId
  site_name: string
  street_number: number
  street_name: string
  city: string
  zip_code: number
  department: string
  state_code: number
  coordinates: {
    latitude: number
    longitude: number
  }
}
