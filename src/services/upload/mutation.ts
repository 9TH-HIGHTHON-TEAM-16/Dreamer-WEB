import { useMutation } from "react-query";
import UploadApi from "./api";

export const useUploadImageMutation = () => {
  const mutation = useMutation((file: FormData) =>
    UploadApi.postUploadApi(file)
  );
  return mutation;
};
