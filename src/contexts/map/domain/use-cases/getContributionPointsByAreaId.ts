import { MapRepository } from "@/contexts/map/domain/MapRepository";
import { GetContributionPointsByAreaIdPayload } from "@/contexts/map/domain/types/getContributionPointsByAreaId";

export const getContributionPointsByAreaIdUseCase = (mapRepository: MapRepository) => (payload: GetContributionPointsByAreaIdPayload) => mapRepository.getContributionPointsByAreaId(payload)
