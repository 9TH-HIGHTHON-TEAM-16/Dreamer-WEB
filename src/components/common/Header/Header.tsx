import Token from "@/libs/Token/Token";
import * as S from "./style";
import logo from "@/stories/assets/icons/logo.svg";
import search from "@/stories/assets/icons/search.svg";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/constant";
import { useLocation, useNavigate } from "react-router";
import { useLogout } from "@/stories/hooks";
import profile from "@/stories/assets/images/profile.webp";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handleLogout } = useLogout();

  const isSign = pathname === "/signin" || pathname === "/signup";
  const isHaveToken = Token.getCookie(ACCESS_TOKEN_KEY);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Logo onClick={() => (window.location.href = "/")}>
            <img src={logo} alt="로고" />
            <p>dreamer</p>
          </S.Logo>
          {!isSign && (
            <ul>
              <li>채용</li>
              <li>직업 추천</li>
              <li>관련 제도</li>
            </ul>
          )}
        </S.Content>

        {!isSign && (
          <S.Etc>
            <S.Search src={search} alt="검색" />

            {isHaveToken ? (
              <>
                <S.Profile src={profile} alt="프로필" />
                <div onClick={handleLogout}>로그아웃</div>
              </>
            ) : (
              <div onClick={() => navigate("/signin")}>회원가입/로그인</div>
            )}
          </S.Etc>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
