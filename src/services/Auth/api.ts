import { dreamerAxios } from "@/libs/Axios/dreamerAxios";
import {
  AccessTokenResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from "@/stories/core";

class AuthApi {
  public async postRefreshToken(
    refreshToken: string
  ): Promise<AccessTokenResponse> {
    const { data } = await dreamerAxios.post("/refresh", {
      refreshToken,
    });
    return data;
  }

  public async postSignUp(signUpRequest: SignUpRequest): Promise<void> {
    await dreamerAxios.post("/auth/sign-up", signUpRequest);
  }

  public async postSignIn(
    signInRequest: SignInRequest
  ): Promise<SignInResponse> {
    const { data } = await dreamerAxios.post("/auth/sign-in", signInRequest);
    return data;
  }
}

export default new AuthApi();
