import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { DASHBOARD_ROUTER } from '../../general/constants/route-constant/route.constant';
const Greetings = lazy(() => import('./components/greetings-component/greetings.component'));

const dashboardChildrenRouter: RouteObject[] = [
  {
    path: DASHBOARD_ROUTER.LANDING,
    element:<Suspense fallback={<>...</>}><Greetings /></Suspense> 
  },
  {
    path: DASHBOARD_ROUTER.GREETINGS,
    Component: Greetings
  }
];

export default dashboardChildrenRouter;