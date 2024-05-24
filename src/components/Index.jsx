import { Outlet, useLocation, Navigate } from "react-router-dom";
import NavBar from "./Layout/NavBar.jsx";
import { useAuth } from "./utils/AuthProvider.jsx";
import { Suspense } from "react";

function Index() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavBar />
      <div className="container level1">
        {!isLoggedIn && location.pathname === "/protected" ? (
          <Navigate to="/login" />
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default Index;
