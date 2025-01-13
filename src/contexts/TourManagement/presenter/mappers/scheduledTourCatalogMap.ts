import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails";

export const scheduledTourCatalogMap = (scheduledTourDetailsList: ScheduledTourDetails[]) => scheduledTourDetailsList
  .map(scheduledTourDetails => ({
    id: scheduledTourDetails.id,
    name: scheduledTourDetails.tour.name,
    nbrContainers: scheduledTourDetails?.tour?.tourSteps?.length.toString(),
    status: scheduledTourDetails.status,
    vehicleBrand: scheduledTourDetails.vehicle.brand,
    vehicleLicensePlate: scheduledTourDetails.vehicle.licensePlate,
    vehicleModel: scheduledTourDetails.vehicle.model
  }))
