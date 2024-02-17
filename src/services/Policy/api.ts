import { dreamerAxios } from "@/libs/Axios/dreamerAxios";
import { ListPolicyResponse, RegistPolicyRequest } from "@/stories/core";

class PolicyApi {
  public async registPolicy(
    registPolicyRequest: RegistPolicyRequest
  ): Promise<void> {
    await dreamerAxios.post("/policy", registPolicyRequest);
  }

  public async getListPolicy(): Promise<ListPolicyResponse> {
    const { data } = await dreamerAxios.get("/policy/list");
    return data;
  }
}

export default new PolicyApi();
