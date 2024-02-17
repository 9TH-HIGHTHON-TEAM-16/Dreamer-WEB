import SignInPage from "@/pages/Auth/SignInPage";
import SignUpPage from "@/pages/Auth/SignUpPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import CategoryCertificatePage from "@/pages/Category/CertificatePage";
import CategoryEmploymentPage from "@/pages/Category/EmploymentPage";
import CategoryPolicyPage from "@/pages/Category/PolicyPage";
import RegistCertificatePage from "@/pages/Regist/CertificatePage";
import RegistEmploymentPage from "@/pages/Regist/EmploymentPage";
import RegistPolicyPage from "@/pages/Regist/PolicyPage";

export const ROUTER_ITEMS = [
  { path: "/", element: HomePage },

  { path: "/signup", element: SignUpPage },
  { path: "/signin", element: SignInPage },

  { path: "/category/certificate", element: CategoryCertificatePage },
  { path: "/category/employment", element: CategoryEmploymentPage },
  { path: "/category/policy", element: CategoryPolicyPage },

  { path: "/regist/certificate", element: RegistCertificatePage },
  { path: "/regist/employment", element: RegistEmploymentPage },
  { path: "/regist/policy", element: RegistPolicyPage },

  { path: "*", element: NotFoundPage },
] as const;
