import { RegistCertificateRequest } from "@/stories/core";
import { Dispatch, RefObject, SetStateAction } from "react";
import specailNote from "@/stories/assets/icons/specialNote.svg";
import link from "@/stories/assets/icons/link.svg";
import RegistAttachImage from "../../RegistAttachImage";
import * as S from "./style";

interface Props {
  data: Omit<RegistCertificateRequest, "urls">;
  setData: Dispatch<SetStateAction<Omit<RegistCertificateRequest, "urls">>>;
  imgUrl: string[];
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  selectFileImage: RefObject<HTMLInputElement>;

  handleFileUploadClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadDrop: (e: React.DragEvent<HTMLDivElement>) => void;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.FormEvent<HTMLSpanElement>) => void;
}

const CertificateForm = ({ ...hooks }: Props) => {
  return (
    <S.Container>
      <S.TitleInput
        name="title"
        value={hooks.data.title}
        onChange={hooks.handleChange}
        placeholder="자격증 이름을 입력해주세요."
      />

      <S.SpecialNote>
        <img src={specailNote} alt="특이사항" />
        <input
          value={hooks.data.specialNote}
          name="specialNote"
          onChange={hooks.handleChange}
          placeholder="특이사항을 입력해주세요."
        />
      </S.SpecialNote>

      <S.Link>
        <img src={link} alt="링크" />
        <input
          value={hooks.data.url}
          name="url"
          onChange={hooks.handleChange}
          placeholder="자격증 링크를 첨부해주세요."
        />
      </S.Link>

      <S.ContentInputContainer>
        <S.ContentInput
          contentEditable={true}
          onInput={hooks.handleContentChange}
          placeholder={"세부정보를 입력해주세요."}
          suppressContentEditableWarning
        />
      </S.ContentInputContainer>

      <RegistAttachImage {...hooks} />
    </S.Container>
  );
};

export default CertificateForm;
