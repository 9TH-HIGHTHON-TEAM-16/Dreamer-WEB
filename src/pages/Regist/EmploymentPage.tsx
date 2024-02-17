import Employment from "@/components/Regist/Employment/Employment";
import { useAdminCheck, useTokenCheck } from "@/stories/hooks";

const RegistEmploymentPage = () => {
  useTokenCheck();
  useAdminCheck();
  return <Employment />;
};

export default RegistEmploymentPage;
