import { ReportRepository } from "@/contexts/report/domain/ReportRepository"
import { PostReportFormPayload } from "@/contexts/report/domain/types/postReportForm"

export const postReportFormUseCase = (reportRepository: ReportRepository) => (payload: PostReportFormPayload) => reportRepository.postReportForm(payload)
