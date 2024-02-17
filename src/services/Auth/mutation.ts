import { useMutation } from "react-query";
import AuthApi from "./api";
import { SignInRequest, SignUpRequest } from "@/stories/core";

export const useSignUpMutation = () => {
  const mutation = useMutation((signUpRequest: SignUpRequest) =>
    AuthApi.postSignUp(signUpRequest)
  );
  return mutation;
};

export const useSignInMutation = () => {
  const mutation = useMutation((signInRequest: SignInRequest) =>
    AuthApi.postSignIn(signInRequest)
  );
  return mutation;
};
