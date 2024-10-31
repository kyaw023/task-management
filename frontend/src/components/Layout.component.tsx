import {Outlet} from "react-router-dom";



const LayoutComponent = () => {
    return (
        <div className=" dark:bg-gray-900 min-h-screen">
            <main className=" max-w-[1200px] mx-auto">
                <Outlet/>
            </main>
        </div>
    )
}
export default LayoutComponent
