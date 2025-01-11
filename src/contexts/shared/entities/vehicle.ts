import { UniqueId, VehicleFuelType, VehicleStatus, VehicleType } from "@/contexts/shared/entities/shared-kernel"

export type Vehicle = {
  id: UniqueId
  brand: string
  model: string
  year: number
  vin: string
  licensePlate: string
  color: string
  type: VehicleType
  fuelType: VehicleFuelType
  mileage: number
  purchaseDate: string
  purchasePrice: number
  status: VehicleStatus
}
