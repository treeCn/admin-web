import login from './shared/login';
import home from './shared/home';
import demo2 from './demo2';
import demo1 from './demo1';
import demo3 from './demo3';

const router = [
  ...login,
  {
    path: '/',
    name: '',
    meta: { title: 'Home' },
    component: () => import('@/components/framement/'),
    redirect: '/home',
    children: [
      ...home,
      ...demo1,
      ...demo2,
      ...demo3,
    ],
  },
];

export default router;
