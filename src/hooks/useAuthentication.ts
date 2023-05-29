import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token") as string | undefined;
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];

      window.localStorage.setItem("token", token as string);
    }
    setToken(token ?? "");
  }, []);

  const onLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return {
    token,
    onLogout,
  };
};
