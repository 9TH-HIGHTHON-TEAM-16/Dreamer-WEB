import { QUERY_KEYS } from "@/stories/core";
import { useQuery } from "react-query";
import PolicyApi from "./api";

export const useGetListPolicyQuery = () =>
  useQuery(QUERY_KEYS.policy.getListPolicy, () => PolicyApi.getListPolicy(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    suspense: true,
  });
