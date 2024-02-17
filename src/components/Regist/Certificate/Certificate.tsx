import RegistNavigation from "../RegistNavigation";
import { RegistContainer, RegistWrap } from "../style";
import CertificateForm from "./Form/Form";
import { useRegistCertificate } from "./hooks";

const Certificate = () => {
  const { ...hooks } = useRegistCertificate();
  return (
    <RegistContainer>
      <RegistWrap>
        <RegistNavigation {...hooks} />
        <CertificateForm {...hooks} />
      </RegistWrap>
    </RegistContainer>
  );
};

export default Certificate;
