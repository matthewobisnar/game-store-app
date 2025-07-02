import ErrorRouteComponent from '@/components/ds/ErrorRouteComponent';
import Layout from '@/screens/Layout';
import Store from '@/screens/Store';
import StoreDetail from '@/screens/StoreDetail';
import { Suspense, type ComponentType } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';


const withSuspense = <T extends object,>( Component: ComponentType) => (
  (props : T) => (
    <Suspense fallback={<div>Loading...</div>}>
    <Component {...props}/>
  </Suspense>
  )
)

const routes: RouteObject[] = [
  {
    path:'/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: withSuspense(Store)
      },
      {
        path: '/games/:slug',
        Component: StoreDetail
      },
      {
        path: '*',
        Component: ErrorRouteComponent
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;