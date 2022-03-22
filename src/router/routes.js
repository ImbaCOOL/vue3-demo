const Layout = () => import('@/layout/index.vue')
const UserList = () => import('@views/user/list.vue')
const UserAdd = () => import('@views/user/add.vue')
const UserEdit = () => import('@views/user/edit.vue')
const Login = () => import('@views/login/login.vue')
const Home = () => import('@views/home/home.vue')

export default [
  // 首页
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        meta: { name: '首页' },
        component: Home
      },
    ]
  },
  // 用户管理
  {
    path: '/user',
    redirect: '/user/list',
    meta: { name: '用户管理' },
    component: Layout,
    children: [
      {
        path: 'list',
        meta: { name: '列表' },
        component: UserList
      },
      {
        path: 'add',
        meta: { name: '添加' },
        component: UserAdd
      },
      {
        path: 'edit/:id',
        meta: { name: '编辑' },
        component: UserEdit
      },
    ]
  },
  // 角色权限
  {
    path: '/role',
    redirect: '/role/list',
    meta: { name: '角色权限' },
    component: Layout,
    children: [
      {
        path: 'list',
        meta: { name: '列表' },
        component: Home
      },
    ]
  },
  // 工单管理
  {
    path: '/order',
    redirect: '/order/list',
    meta: { name: '工单管理' },
    component: Layout,
    children: [
      {
        path: 'list',
        meta: { name: '列表' },
        component: Home
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
]