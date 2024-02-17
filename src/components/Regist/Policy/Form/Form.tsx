import { RegistPolicyRequest } from "@/stories/core";
import { Dispatch, RefObject, SetStateAction } from "react";
import RegistAttachImage from "../../RegistAttachImage";
import specailNote from "@/stories/assets/icons/specialNote.svg";
import link from "@/stories/assets/icons/link.svg";
import * as S from "./style";

interface Props {
  data: Omit<RegistPolicyRequest, "urls">;
  setData: Dispatch<SetStateAction<Omit<RegistPolicyRequest, "urls">>>;
  imgUrl: string[];
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  selectFileImage: RefObject<HTMLInputElement>;

  handleFileUploadClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadDrop: (e: React.DragEvent<HTMLDivElement>) => void;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.FormEvent<HTMLSpanElement>) => void;
}

const PolicyForm = ({ ...hooks }: Props) => {
  return (
    <S.Container>
      <S.TitleInput
        name="title"
        value={hooks.data.title}
        onChange={hooks.handleChange}
        placeholder="관련 제도명을 입력해주세요."
      />

      <S.SpecialNote>
        <img src={specailNote} alt="대상자" />
        <input
          value={hooks.data.subject}
          name="subject"
          onChange={hooks.handleChange}
          placeholder="특정 대상자를 입력해주세요."
        />
      </S.SpecialNote>

      <S.Link>
        <img src={link} alt="링크" />
        <input
          value={hooks.data.url}
          name="url"
          onChange={hooks.handleChange}
          placeholder="관련제도 링크를 첨부해주세요."
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

export default PolicyForm;
