import { QUERY_KEYS } from "@/stories/core";
import { useQuery } from "react-query";
import EmploymentApi from "./api";

export const useGetRoleEmplomentQuery = () =>
  useQuery(
    QUERY_KEYS.employment.getRoleEmployment,
    () => EmploymentApi.getRoleEmployment(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );

export const useGetLocationEmplomentQuery = () =>
  useQuery(
    QUERY_KEYS.employment.getLocationEmployment,
    () => EmploymentApi.getLocationEmployment(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );

export const useGetListEmploymentQuery = () =>
  useQuery(
    QUERY_KEYS.employment.getListEmployment,
    () => EmploymentApi.getListEmployment(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      suspense: true,
    }
  );
