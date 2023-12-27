import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const useAuthGuard = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const authToken = cookies.get("authToken");

  useEffect(() => {
    if (!authToken) {
      navigate("/adminLogin");
    }
  }, [authToken, navigate]);

  return { authToken };
};

export default useAuthGuard;
