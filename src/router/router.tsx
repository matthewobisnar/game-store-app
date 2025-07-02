import Layout from '@/screens/Layout';
import StoreDetail from '@/screens/StoreDetail';
import { lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';


const StoreRouteComponent = lazy(() => import('@/screens/Store'));

const routes: RouteObject[] = [
  {
    path:'/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: StoreRouteComponent
      },
      {
        path: '/games/:id',
        Component: StoreDetail
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;