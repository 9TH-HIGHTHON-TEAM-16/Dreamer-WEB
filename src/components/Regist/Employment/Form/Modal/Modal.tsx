import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import {
  useGetLocationEmplomentQuery,
  useGetRoleEmplomentQuery,
} from "@/services/Employment/query";
import { RegistEmploymentRequest } from "@/stories/core";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;

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
}

const Modal = ({ ...hooks }: Props) => {
  useEscCloseModal(hooks.setIsActive);

  const { data: location } = useGetLocationEmplomentQuery();
  const { data: role } = useGetRoleEmplomentQuery();

  const [roleItem, setRoleItem] = useState<string[]>([]);
  const [locationItem, setLocationItem] = useState<string[]>([]);

  return (
    <S.Container onClick={() => hooks.setIsActive(false)}>
      <S.Box onClick={(e) => e.stopPropagation()}>
        <S.InputWrap>
          <p>경력 기간(년)</p>
          <input
            placeholder="경력을 입력해주세요"
            value={hooks.detailData.careerYear}
            onChange={(e) =>
              hooks.setDetailData((prev) => ({
                ...prev,
                careerYear: Number(e.target.value),
              }))
            }
          />
        </S.InputWrap>

        <S.InputWrap>
          <p>포지션</p>
          <select
            style={{ color: roleItem.length > 0 ? "#b77dff" : "#b8b8b8" }}
            onChange={(e) => {
              const selectedRole = role?.data.find(
                (item) => item.role === e.target.value
              );
              hooks.setDetailData((prev) => ({
                ...prev,
                role: e.target.value,
              }));
              setRoleItem(selectedRole ? selectedRole.details : []);
            }}
          >
            <option value={""}>포지션을 선택해주세요</option>
            {role?.data.map((item, idx) => (
              <option key={idx} value={item.role}>
                {item.role}
              </option>
            ))}
          </select>
        </S.InputWrap>

        <S.InputWrap>
          <p>직무</p>
          <select
            style={{ color: roleItem.length > 0 ? "#b77dff" : "#b8b8b8" }}
            onChange={(e) => {
              hooks.setDetailData((prev) => ({
                ...prev,
                role: `${prev.role} ${e.target.value}`,
              }));
            }}
          >
            {roleItem.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </S.InputWrap>

        <S.InputWrap>
          <p>지역</p>
          <select
            style={{ color: locationItem.length > 0 ? "#b77dff" : "#b8b8b8" }}
            onChange={(e) => {
              const selectedLocation = location?.data.find(
                (item) => item.location === e.target.value
              );
              hooks.setDetailData((prev) => ({
                ...prev,
                location: e.target.value,
              }));
              setLocationItem(selectedLocation ? selectedLocation.details : []);
            }}
          >
            <option value={""}>지역을 선택해주세요</option>
            {location?.data.map((item, idx) => (
              <option key={idx} value={item.location}>
                {item.location}
              </option>
            ))}
          </select>
        </S.InputWrap>

        <S.InputWrap>
          <p>상세지역</p>
          <select
            style={{ color: locationItem.length > 0 ? "#b77dff" : "#b8b8b8" }}
            onChange={(e) => {
              hooks.setDetailData((prev) => ({
                ...prev,
                location: `${prev.location} ${e.target.value}`,
              }));
            }}
          >
            {locationItem.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </S.InputWrap>

        <S.ButtonWrap>
          <S.Button onClick={() => hooks.setIsActive(false)}>확인</S.Button>
        </S.ButtonWrap>
      </S.Box>
    </S.Container>
  );
};

export default Modal;
