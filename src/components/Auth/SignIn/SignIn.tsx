import warn from "@/stories/assets/icons/warn.svg";
import * as S from "./style";
import { useNavigate } from "react-router";
import { useSignIn } from "./hooks";

const SignIn = () => {
  const navigate = useNavigate();
  const { content, handleChange, handleSubmit, isBlank } = useSignIn();

  return (
    <S.Container>
      <S.Box>
        <S.Title>
          <S.MainTitle>드리머에 오신 것을 환영해요.</S.MainTitle>
          <S.SubTitle>꿈을 꾸는 사람들에게, 드리머</S.SubTitle>
        </S.Title>

        <S.Form onSubmit={handleSubmit}>
          <S.InputWrap>
            <p>이메일</p>
            <input
              name="email"
              value={content.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요."
              autoComplete="off"
            />
          </S.InputWrap>

          <S.InputWrap>
            <p>비밀번호</p>
            <input
              name="password"
              value={content.password}
              type="password"
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
              autoComplete="off"
            />
          </S.InputWrap>

          <S.Warn>
            <img src={warn} alt="경고" />
            <p>비밀번호는 최소 8자 이상이어야 합니다.</p>
          </S.Warn>

          <S.Button isBlank={isBlank} type="submit">
            확인
          </S.Button>

          <S.SuggestSignUp>
            계정을 없으신가요?{" "}
            <span onClick={() => navigate("/signup")}>회원가입 하기</span>
          </S.SuggestSignUp>
        </S.Form>
      </S.Box>
    </S.Container>
  );
};

export default SignIn;
