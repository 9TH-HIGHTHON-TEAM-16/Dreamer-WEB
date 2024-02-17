import { useUploadImageMutation } from "@/services/upload/mutation";
import { useRef, useState } from "react";

export const useUploadImage = () => {
  const formData = new FormData();
  const postUploadImage = useUploadImageMutation();
  const selectFileImage = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  const handleFileUpload = (selectedFiles: FileList) => {
    const filesArray = Array.from(selectedFiles) as File[];

    filesArray.map((item) => {
      formData.append("files", item);
    });

    postUploadImage.mutate(formData, {
      onSuccess: (res) => {
        res.map((item) => setImgUrl((prev) => [...prev, item]));
      },
    });
  };

  const handleFileUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = selectFileImage.current?.files;
    handleFileUpload(selectedFiles!);
  };

  const handleFileUploadDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFiles = e.dataTransfer.files;
    handleFileUpload(selectedFiles);
  };

  return {
    selectFileImage,
    handleFileUpload,
    handleFileUploadDrop,
    handleFileUploadClick,
    imgUrl,
    setImgUrl,
  };
};
