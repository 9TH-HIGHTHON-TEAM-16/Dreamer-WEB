import { QUERY_KEYS } from "@/stories/core";
import { useQuery } from "react-query";
import CertificateApi from "./api";

export const useGetListCertificateQuery = () =>
  useQuery(
    QUERY_KEYS.certificate.getListCertificate,
    () => CertificateApi.getListCertificate(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      suspense: true,
    }
  );
