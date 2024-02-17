import { QUERY_KEYS } from "@/stories/core";
import { useQuery } from "react-query";
import UserApi from "./api";

export const useGetUserInfoQuery = () =>
  useQuery(QUERY_KEYS.user.getUserInfo, () => UserApi.getUserInfo(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
