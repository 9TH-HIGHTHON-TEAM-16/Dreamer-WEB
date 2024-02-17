import RegistNavigation from "../RegistNavigation";
import { RegistContainer, RegistWrap } from "../style";
import PolicyForm from "./Form/Form";
import { useRegistPolicy } from "./hooks";

const Policy = () => {
  const { ...hooks } = useRegistPolicy();
  return (
    <RegistContainer>
      <RegistWrap>
        <RegistNavigation {...hooks} />
        <PolicyForm {...hooks} />
      </RegistWrap>
    </RegistContainer>
  );
};

export default Policy;
