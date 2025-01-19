import { MapRepository } from "@/contexts/map/domain/MapRepository";
import { GetNearestContributionPointsByGeoPosPayload } from "@/contexts/map/domain/types/getNearestContributionPointsByGeoPos";

export const getNearestContributionPointsByGeoPosUseCase = (mapRepository: MapRepository) => (payload: GetNearestContributionPointsByGeoPosPayload) => mapRepository.getNearestContributionPointsByGeoPos(payload)
