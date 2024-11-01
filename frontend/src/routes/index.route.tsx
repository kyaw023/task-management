import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LayoutComponent} from "../components";
import HomePage from "../pages/Home.page.tsx";
import {LoginPage, RegisterPage} from "../pages";


const IndexRoute = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <LayoutComponent/>,
                children : [
                    {
                       index: true, element : <HomePage/>
                    },
                    {
                        path : "login",
                        element : <LoginPage/>
                    },
                    {
                        path : "register",
                        element : <RegisterPage/>
                    },
                ]
            },

        ]
    )

    return <RouterProvider router={router} />
}
export default IndexRoute