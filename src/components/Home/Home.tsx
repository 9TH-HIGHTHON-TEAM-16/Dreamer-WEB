import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/category/employment");
  }, [navigate]);

  return <></>;
};

export default Home;
