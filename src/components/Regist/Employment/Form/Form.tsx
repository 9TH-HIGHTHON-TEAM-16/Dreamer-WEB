import * as S from "./style";
import specailNote from "@/stories/assets/icons/specialNote.svg";
import tag from "@/stories/assets/icons/tag.svg";
import RegistAttachImage from "../../RegistAttachImage";
import { Dispatch, RefObject, SetStateAction, useState } from "react";
import { Portal } from "@/stories/layout";
import Modal from "./Modal/Modal";
import { RegistEmploymentRequest } from "@/stories/core";

interface Props {
  data: Omit<
    RegistEmploymentRequest,
    "location" | "role" | "careerYear" | "urls"
  >;
  setData: Dispatch<
    SetStateAction<
      Omit<RegistEmploymentRequest, "location" | "role" | "careerYear" | "urls">
    >
  >;
  imgUrl: string[];
  tag: string;
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  selectFileImage: RefObject<HTMLInputElement>;

  detailData: Omit<
    RegistEmploymentRequest,
    "tagList" | "title" | "content" | "specialNote" | "urls"
  >;
  setDetailData: Dispatch<
    SetStateAction<
      Omit<
        RegistEmploymentRequest,
        "tagList" | "title" | "content" | "specialNote" | "urls"
      >
    >
  >;

  handleFileUploadClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadDrop: (e: React.DragEvent<HTMLDivElement>) => void;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.FormEvent<HTMLSpanElement>) => void;
  handleTagEnter: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EmploymentForm = ({ ...hooks }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <S.Container>
        <S.TitleInput
          name="title"
          value={hooks.data.title}
          onChange={hooks.handleChange}
          placeholder="채용공고 제목을 입력해주세요."
        />

        <S.Note>
          <S.SpecialNote>
            <img src={specailNote} alt="특이사항" />
            <input
              value={hooks.data.specialNote}
              name="specialNote"
              onChange={hooks.handleChange}
              placeholder="특이사항을 입력해주세요."
            />
          </S.SpecialNote>
          <S.DetailNote onClick={() => setIsActive(true)}>
            세부사항 선택하기
          </S.DetailNote>
        </S.Note>

        <S.Tag>
          <form onSubmit={hooks.handleTagEnter}>
            <img src={tag} alt="태그" />
            <input
              name="tagList"
              value={hooks.tag}
              onChange={hooks.handleChange}
              placeholder="태그를 입력해주세요."
            />
          </form>

          <ul>
            {hooks.data.tagList.map((item, idx) => (
              <li
                key={idx}
                onClick={() =>
                  hooks.setData((prev) => ({
                    ...prev,
                    tagList: prev.tagList.filter((tag) => tag !== item),
                  }))
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </S.Tag>

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

      {isActive && (
        <Portal>
          <Modal setIsActive={setIsActive} {...hooks} />
        </Portal>
      )}
    </>
  );
};

export default EmploymentForm;
