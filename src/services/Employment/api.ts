import { dreamerAxios } from "@/libs/Axios/dreamerAxios";
import {
  ListEmploymentResponse,
  LocationEmploymentResponse,
  RegistEmploymentRequest,
  RoleEmploymentResponse,
} from "@/stories/core";

class EmploymentApi {
  public async registEmployment(
    registEmploymentRequest: RegistEmploymentRequest
  ): Promise<void> {
    await dreamerAxios.post("/job", registEmploymentRequest);
  }

  public async getRoleEmployment(): Promise<RoleEmploymentResponse> {
    const { data } = await dreamerAxios.get("/job/role/list");
    return data;
  }

  public async getLocationEmployment(): Promise<LocationEmploymentResponse> {
    const { data } = await dreamerAxios.get("/job/location/list");
    return data;
  }

  public async getListEmployment(): Promise<ListEmploymentResponse> {
    const { data } = await dreamerAxios.get("/job/list");
    return data;
  }
}

export default new EmploymentApi();
