import { PostReportFormPayload, PostReportFormSuccess } from "./types/postReportForm";

export interface ReportRepository {

    postReportForm(payload: PostReportFormPayload): Promise<PostReportFormSuccess>

}