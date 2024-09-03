import { Link, Outlet } from "react-router-dom";
import { APP_ROUTER } from "../constants/route-constant/route.constant";

const Landing =() => {
    return (
        <div>
            Langing Page
            <div>
                <ul>
                    <li><Link to={APP_ROUTER.LOGIN} replace={true}>Login</Link></li>
                    <li><Link to={APP_ROUTER.SIGN_UP}>Sign Up</Link></li>
                    <li><Link to={APP_ROUTER.DASHBOARD}>Dashboard</Link></li>
                </ul>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
 }

 export default Landing;

