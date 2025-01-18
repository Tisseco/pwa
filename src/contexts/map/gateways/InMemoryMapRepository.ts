import { MapRepository } from "@/contexts/map/domain/MapRepository";
import { GetNearestContributionPointsByGeoPosPayload, GetNearestContributionPointsByGeoPosSuccess } from "@/contexts/map/domain/types/getNearestContributionPointsByGeoPos";

export class InMemoryMapRepository implements MapRepository {
    
  // @ts-expect-error: args are used only in real context
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getNearestContributionPointsByGeoPos({ lat, lng }: GetNearestContributionPointsByGeoPosPayload): Promise<GetNearestContributionPointsByGeoPosSuccess> {
    
    return new Promise((resolve) => {
      resolve([
        {
          name: 'École maternelle Pommier-Picard',
          address: 'Avenue Eugène Delacroix',
          city: 'Roissy-en-Brie',
          zipCode: '77680',
          coordinates: {
            lat: 48.79486594306784,
            lng: 2.66332583500162,
          },
        },
        {
          name: 'Maire de Roissy',
          address: '9 Rue Pasteur',
          city: 'Roissy-en-Brie',
          zipCode: '77680',
          coordinates: {
            lat: 48.79089017580114,
            lng: 2.6545373947958124,
          },
        },
        {
          name: 'Supermarché Diagonal',
          address: '21 Avenue du Maréchal Foch',
          city: 'Roissy-en-Brie',
          zipCode: '77680',
          coordinates: {
            lat: 48.79113799735448,
            lng: 2.66868861297407,
          },
        },
      ])
    })
  }

}