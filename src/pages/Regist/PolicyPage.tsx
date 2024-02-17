import Policy from "@/components/Regist/Policy/Policy";
import { useAdminCheck, useTokenCheck } from "@/stories/hooks";

const RegistPolicyPage = () => {
  useTokenCheck();
  useAdminCheck();
  return <Policy />;
};

export default RegistPolicyPage;
