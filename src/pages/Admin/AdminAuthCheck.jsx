import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthGuard = () => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const tokenFromCookie = getCookie("authToken");

    if (!tokenFromCookie) {
      navigate("/adminLogin");
    } else {
      setAuthToken(tokenFromCookie);
    }
  }, [navigate]);

  const getCookie = (name) => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  return { authToken };
};

export default useAuthGuard;
