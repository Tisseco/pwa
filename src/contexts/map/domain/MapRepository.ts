import { GetContributionPointsByAreaIdPayload, GetContributionPointsByAreaIdSuccess } from "@/contexts/map/domain/types/getContributionPointsByAreaId";
import { GetNearestContributionPointsByGeoPosPayload, GetNearestContributionPointsByGeoPosSuccess } from "./types/getNearestContributionPointsByGeoPos";

export interface MapRepository {

  getNearestContributionPointsByGeoPos({ lat, lng }: GetNearestContributionPointsByGeoPosPayload): Promise<GetNearestContributionPointsByGeoPosSuccess>

  getContributionPointsByAreaId(areaId: GetContributionPointsByAreaIdPayload): Promise<GetContributionPointsByAreaIdSuccess>

}
