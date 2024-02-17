import { useMutation } from "react-query";
import EmploymentApi from "./api";
import { RegistEmploymentRequest } from "@/stories/core";

export const useRegistEmploymentMutation = () => {
  const mutation = useMutation(
    (registEmploymentRequest: RegistEmploymentRequest) =>
      EmploymentApi.registEmployment(registEmploymentRequest)
  );
  return mutation;
};
