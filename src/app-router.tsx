import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { APP_ROUTER } from './modules/general/constants/route-constant/route.constant';

import dashboardChildrenRouter from './modules/application/dashboard/dashboard.routing';

const Landing = lazy(() => import('./modules/general/landing-component/landing.component'));
const NotFound = lazy(() => import('./modules/general/not-found-component/not-found.component'));
const SignUp = lazy(() => import('./modules/general/sign-up-component/sign-up.component'));
const Login = lazy(() => import('./modules/general/login-component/login.component'));

const Dashboard = lazy(() => import('./modules/application/dashboard/dashboard.component'));

const router = createBrowserRouter([
    {
      path: APP_ROUTER.LANDING,
      Component: Landing
    },
    {
        path: APP_ROUTER.LOGIN,
        element:<Suspense fallback={<>...</>}><Login /></Suspense>
    },
    {
        path: APP_ROUTER.SIGN_UP,
        element:<Suspense fallback={<>...</>}><SignUp /></Suspense>
    },
    {
        path: APP_ROUTER.DASHBOARD_MODULE,
        element:<Suspense fallback={<>...</>}><Dashboard /></Suspense>,
        children: dashboardChildrenRouter
    },

    {
        path: APP_ROUTER.WILD_CARD_ROUTE,
        element:<Suspense fallback={<>...</>}><NotFound /></Suspense>
    }
]);

export default router;

 