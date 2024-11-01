import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore.ts";
import { useEffect } from "react";

const LayoutComponent = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true }); // Explicitly navigate to login if user is null
    }
  }, [user, navigate]);

  return (
    <div className=" dark:bg-gray-900 min-h-screen">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
export default LayoutComponent;
