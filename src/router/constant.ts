import SignInPage from "@/pages/Auth/SignInPage";
import SignUpPage from "@/pages/Auth/SignUpPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import PsychologicalTestPage from "@/pages/PsychologicalTestPage";
import CertificatePage from "@/pages/Recommand/CertificatePage";
import JobPage from "@/pages/Recommand/JobPage";
import PolicyPage from "@/pages/Recommand/PolicyPage";

export const ROUTER_ITEMS = [
  { path: "/", element: HomePage },

  { path: "/signup", element: SignUpPage },
  { path: "/signin", element: SignInPage },

  { path: "/recommand/certificate", element: CertificatePage },
  { path: "/recommand/job", element: JobPage },
  { path: "/recommand/policy", element: PolicyPage },

  { path: "/psychological-test", element: PsychologicalTestPage },

  { path: "*", element: NotFoundPage },
] as const;
