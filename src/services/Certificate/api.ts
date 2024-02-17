import { dreamerAxios } from "@/libs/Axios/dreamerAxios";
import {
  ListCertificateResponse,
  RegistCertificateRequest,
} from "@/stories/core";

class CertificateApi {
  public async registCertificate(
    registCertificateRequest: RegistCertificateRequest
  ): Promise<void> {
    await dreamerAxios.post("/certificate", registCertificateRequest);
  }

  public async getListCertificate(): Promise<ListCertificateResponse> {
    const { data } = await dreamerAxios.get("/certificate/list");
    return data;
  }
}

export default new CertificateApi();
