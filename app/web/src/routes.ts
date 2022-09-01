import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Chat = lazy(() => import('@/pages/Chat'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/chat',
      component: Chat,
    }, {
      path: '/',
      exact: true,
      component: Home,
    }, {
      component: NotFound,
    }],
  },
];

export default routerConfig;
