import { ListItem, Title } from "@/stories/ui";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "@/stories/layout/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import { useGetListEmploymentQuery } from "@/services/Employment/query";
import ListItemSkeleton from "@/components/common/Skeleton/ListItem/ListItem";

const Employment = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Title
        title="📝 드리머에 등록된 채용공고에요!"
        onClick={() => navigate("/regist/employment")}
      />

      <S.ListWrap>
        <ErrorBoundary fallback={<>에러!</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <EmploymentItem />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrap>
    </S.Container>
  );
};

const EmploymentItem = () => {
  const { data } = useGetListEmploymentQuery();
  return (
    <>
      {data?.data
        .slice(0)
        .reverse()
        .map((item, idx) => (
          <ListItem
            key={idx}
            title={item.title}
            subTitle={item.specialNote}
            image={item.urls[0]}
          />
        ))}
    </>
  );
};

export default Employment;
