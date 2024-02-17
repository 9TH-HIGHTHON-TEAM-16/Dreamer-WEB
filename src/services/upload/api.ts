import { dreamerAxios } from "@/libs/Axios/dreamerAxios";

class UploadApi {
  public async postUploadApi(file: FormData): Promise<string[]> {
    const { data } = await dreamerAxios.post("/upload/image", file);
    return data;
  }
}

export default new UploadApi();
