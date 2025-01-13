import { ScheduledTourDetails } from "@/contexts/TourManagement/domain/aggregates/scheduledToursDetails"

const getTourStepStatus = (tourStep: ScheduledTourDetails['tour']['tourSteps'][0], pickupList: ScheduledTourDetails['pickups']) : 'IDLE' | 'IN PROGRESS' | 'SUCCESS' | 'ERROR' => {
  const numberOfAreaCollectedInTourStep = pickupList.reduce((acc, curr) => {
    const isCollected = tourStep.site.areas.find(area => area.id === curr.areaId)
    if (isCollected) {
        return acc+1
    }
    return acc
    }, 0)
      
    if (numberOfAreaCollectedInTourStep === 0) return 'IDLE'
    if (numberOfAreaCollectedInTourStep === tourStep.site.areas.length) return 'SUCCESS'
    if (numberOfAreaCollectedInTourStep > 0) return 'IN PROGRESS'
    return 'ERROR'
  
}

export const scheduledTourDetailsMap = (scheduledTourDetails: ScheduledTourDetails) => ({
  id: scheduledTourDetails.id,
  tourSteps: scheduledTourDetails.tour.tourSteps.sort((a, b) => a.order - b.order).map((tourStep, i) => {
    const isLast = scheduledTourDetails.tour.tourSteps.length === i+1
    return {
      order: tourStep.order,
      id: tourStep.id,
      areas: tourStep.site.areas.map(area => ({
        id: area.id,
        size: area.size,
        key: area.container.key,
        coordinates: area.coordinates,
        areaIsCollected: null,
      })),
      status: getTourStepStatus(tourStep, scheduledTourDetails.pickups),
      siteName: tourStep.site.address.name,
      address: `${tourStep.site.address.streetNumber}${tourStep.site.address.streetNumberExtension || ''} ${tourStep.site.address.streetName}`,
      city: `${tourStep.site.address.city} - ${tourStep.site.address.zipCode}`,
      isLast,
      tourStepIsFinished: null
    }
  }),
  pickups: scheduledTourDetails.pickups
})
