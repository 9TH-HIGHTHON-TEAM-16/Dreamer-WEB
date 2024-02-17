import RegistNavigation from "../RegistNavigation";
import { RegistContainer, RegistWrap } from "../style";
import EmploymentForm from "./Form/Form";
import { useRegistEmployment } from "./hooks";

const Employment = () => {
  const { ...hooks } = useRegistEmployment();

  return (
    <RegistContainer>
      <RegistWrap>
        <RegistNavigation {...hooks} />
        <EmploymentForm {...hooks} />
      </RegistWrap>
    </RegistContainer>
  );
};

export default Employment;
