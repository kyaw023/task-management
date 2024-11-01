import { SideBarComponent } from "@/components";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={"flex"}>
      <SideBarComponent />
      <div className="w-full p-3 h-screen overflow-x-hidden overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};
export default HomePage;
