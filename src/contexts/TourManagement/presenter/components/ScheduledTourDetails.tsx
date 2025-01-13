// import { Link } from "@tanstack/react-router"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"
import { ContainerIcon, KeyRound } from "lucide-react"
import { scheduledTourDetailsMap } from "@/contexts/TourManagement/presenter/mappers/scheduledTourDetailsMap"

export const TourStepsCatalog = ({ scheduledTourDetails }
: { scheduledTourDetails: ReturnType<typeof scheduledTourDetailsMap> }
) => {
  return (
    <div>
      { scheduledTourDetails.tourSteps.map(tourStep => (
        <div key={`tourStep-${tourStep.id}`}>
          <div className="flex gap-3">
            <div className="relative w-full flex flex-col top-2">
              <div className={tourStep.status === 'IDLE' ? "absolute top-2 z-10 min-h-3 w-3 rounded-full bg-gray-100 ring-1 ring-gray-300" : "absolute top-2 z-10 min-h-3 w-3 rounded-full bg-blue-100 ring-1 ring-blue-300"} />
                {!tourStep.isLast && (
                  <div 
                    className={
                      tourStep.status === 'SUCCESS' ?
                      "absolute top-2 ml-[5px] shrink-0 bg-blue-300 h-full w-[3px]"
                      :
                      "absolute top-2 ml-[5px] shrink-0 bg-border h-full w-[3px]"
                    }
                  />
                )}
                <Accordion type="single" collapsible>
                  <AccordionItem value={tourStep.id.toString()}>
                    <AccordionTrigger className="pb-0">
                      <h4 className="ml-6 scroll-m-20 text-xl font-semibold tracking-tight">
                          {tourStep.siteName}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-8 flex flex-col">
                        <p className="leading-7 [&:not(:first-child)]:mt-1">
                          {tourStep.address}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-1">
                          {tourStep.city}
                        </p>
                        <ul>
                          {tourStep.areas.map((area) => (
                            <div key={`area-${area.id}`}>
                              <div className="flex flex-row gap-2">
                                <div className="flex flex-row gap-2">
                                    {scheduledTourDetails.pickups.find(
                                    (pickup) =>
                                        pickup.areaId === area.id,
                                    ) ? (
                                    <ContainerIcon className="text-blue-300" />
                                    ) : (
                                    <ContainerIcon />
                                    )}
                                    <p>{area.size}</p>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <KeyRound />
                                    <p>{area.key}</p>
                                </div>
                                {/* <Link
                                  target="_blank"
                                  to="https://waze.com/ul?ll=45.6906304,-120.810983&z=10"
                                  rel="noopener noreferrer"
                                >
                                  link
                                </Link> */}
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
