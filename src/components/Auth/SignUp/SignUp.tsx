import warn from "@/stories/assets/icons/warn.svg";
import * as S from "./style";
import { useSignUp } from "./hooks";

const SignUp = () => {
  const { content, handleChange, handleSubmit, isBlank } = useSignUp();

  return (
    <S.Container>
      <S.Box>
        <S.Title>
          <S.MainTitle>회원가입</S.MainTitle>
          <S.SubTitle>드리머에서 사용할 계정을 생성해 주세요.</S.SubTitle>
        </S.Title>

        <S.Form onSubmit={handleSubmit}>
          <S.InputWrap>
            <p>전화번호</p>
            <input
              value={content.number}
              name="number"
              onChange={handleChange}
              placeholder="전화번호를 입력해주세요."
              autoComplete="off"
            />
          </S.InputWrap>

          <S.InputWrap>
            <p>주민등록번호</p>
            <S.Citizen>
              <input
                style={{ width: "50%" }}
                placeholder="주민등록번호를 입력해주세요."
                autoComplete="off"
              />

              <p>-</p>

              <div>
                <S.One maxLength={1} autoComplete="off" />
                <S.Two value="ooooo" type="password" />
              </div>
            </S.Citizen>
          </S.InputWrap>

          <S.InputWrap>
            <p>이름</p>
            <input
              name="name"
              value={content.name}
              onChange={handleChange}
              placeholder="이름을 입력해주세요."
              autoComplete="off"
            />
          </S.InputWrap>

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
              value={content.password}
              name="password"
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
        </S.Form>
      </S.Box>
    </S.Container>
  );
};

export default SignUp;
