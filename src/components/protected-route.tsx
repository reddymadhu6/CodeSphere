import { useEffect, useContext } from "react";

import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesPathName } from "../constants";
import { AuthContext } from "../contexts";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate(RoutesPathName.LANDING_PAGE);
  }, [user]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       setLoading(true);
  //       const {
  //         data: { session },
  //         error,
  //       } = await Supabase.auth.getSession();
  //       console.log("from session", session);
  //       if (error) throw error;
  //       if (!session) {
  //         navigate(RoutesPathName.LOGIN_PAGE);
  //       }
  //       console.log(session);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, []);
  // if (loading) return <div>Loading</div>;
  if (!user) return <>Loading</>;

  return <>{children}</>;
};
