import { dreamerAxios } from "@/libs/Axios/dreamerAxios";
import { UserInfoResponse } from "@/stories/core";

class UserApi {
  public async getUserInfo(): Promise<UserInfoResponse> {
    const { data } = await dreamerAxios.get("/user/info");
    return data;
  }
}

export default new UserApi();
