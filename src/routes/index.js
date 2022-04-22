import HomeTemplate from "../pages/HomePage";
import Home from "../pages/HomePage/Home";
import loginPage from "../pages/LoginPage/loginPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import ProfilePage from "../pages/ProfilePage";


export const Homeroutes = [
    {
        exact: false,
        path: "/",
        element: <Home/>,
        
    },
    {
        exact: false,
        path: "/detail/:id",
        component: MovieDetailPage,
    },
    {
        exact: false,
        path: "/profile",
        component: ProfilePage,
    },
    
]
const MovieDetailroutes = [{
    exact: false,
    path: "/MovieDetail",
    component: MovieDetailPage,
}]