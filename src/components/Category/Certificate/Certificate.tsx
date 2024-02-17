import { ListItem, Title } from "@/stories/ui";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "@/stories/layout/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import { useGetListCertificateQuery } from "@/services/Certificate/query";
import ListItemSkeleton from "@/components/common/Skeleton/ListItem/ListItem";

const Certificate = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Title
        title="🪪 드리머에 올라온 취업 관련 자격증들이에요!"
        onClick={() => navigate("/regist/certificate")}
      />

      <S.ListWrap>
        <ErrorBoundary fallback={<>에러!</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <CertificateItem />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrap>
    </S.Container>
  );
};

const CertificateItem = () => {
  const { data } = useGetListCertificateQuery();
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

export default Certificate;
