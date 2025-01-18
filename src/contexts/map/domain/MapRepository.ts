import { GetNearestContributionPointsByGeoPosPayload, GetNearestContributionPointsByGeoPosSuccess } from "./types/getNearestContributionPointsByGeoPos";

export interface MapRepository {

  getNearestContributionPointsByGeoPos({ lat, lng }: GetNearestContributionPointsByGeoPosPayload): Promise<GetNearestContributionPointsByGeoPosSuccess>

}
