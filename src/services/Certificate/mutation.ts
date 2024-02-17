import { useMutation } from "react-query";
import CertificateApi from "./api";
import { RegistCertificateRequest } from "@/stories/core";

export const useRegistCertificateMutation = () => {
  const mutation = useMutation(
    (registCertificateRequest: RegistCertificateRequest) =>
      CertificateApi.registCertificate(registCertificateRequest)
  );
  return mutation;
};
