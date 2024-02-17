import { useMutation } from "react-query";
import PolicyApi from "./api";
import { RegistPolicyRequest } from "@/stories/core";

export const useRegistPolicyMutation = () => {
  const mutation = useMutation((registPolicyRequest: RegistPolicyRequest) =>
    PolicyApi.registPolicy(registPolicyRequest)
  );
  return mutation;
};
