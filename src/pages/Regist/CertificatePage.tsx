import Certificate from "@/components/Regist/Certificate/Certificate";
import { useAdminCheck, useTokenCheck } from "@/stories/hooks";

const RegistCertificatePage = () => {
  useTokenCheck();
  useAdminCheck();
  return <Certificate />;
};

export default RegistCertificatePage;
