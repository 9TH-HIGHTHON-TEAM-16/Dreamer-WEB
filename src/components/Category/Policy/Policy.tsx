import { ListItem, Title } from "@/stories/ui";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import { useGetListPolicyQuery } from "@/services/Policy/query";
import ErrorBoundary from "@/stories/layout/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import ListItemSkeleton from "@/components/common/Skeleton/ListItem/ListItem";

const Policy = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Title
        title="📖 진로 / 취업에 관련된 제도 정보를 보여줘요!"
        onClick={() => navigate("/regist/policy")}
      />

      <S.ListWrap>
        <ErrorBoundary fallback={<>에러!</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <PolicyItem />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrap>
    </S.Container>
  );
};

const PolicyItem = () => {
  const { data } = useGetListPolicyQuery();
  return (
    <>
      {data?.data
        .slice(0)
        .reverse()
        .map((item, idx) => (
          <ListItem
            key={idx}
            title={item.title}
            subTitle={item.subject}
            image={item.urls[0]}
          />
        ))}
    </>
  );
};

export default Policy;
