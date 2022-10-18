import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../src/store/store";
import { getUserState } from "../../../src/store/slices/userSlice";

const RouteGuard = ({ children }: any) => {
  const router = useRouter();
  const { authorizedUserData } = useSelector(getUserState);

  const [authorized, setAuthorized]: any = useState(authorizedUserData);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [authorizedUserData]);

  async function authCheck(url: any) {
    const token = await localStorage.getItem("token");

    console.log("token is: ", authorizedUserData, authorized, token);

    if (!token) {
      // if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(null);
      router.push({
        pathname: "/signIn",
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
};

export default RouteGuard;
