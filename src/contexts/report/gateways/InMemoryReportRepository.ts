import { ReportRepository } from "@/contexts/report/domain/ReportRepository";
import { PostReportFormPayload, PostReportFormSuccess } from "../domain/types/postReportForm";

export class InMemoryReportRepository implements ReportRepository {
  
  // @ts-expect-error: args are used only in real context
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  postReportForm(payload: PostReportFormPayload): Promise<PostReportFormSuccess> {
    return new Promise((resolve) => {
      resolve({
        message: "success"
      })
    })
  }

}