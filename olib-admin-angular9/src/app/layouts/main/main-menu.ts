import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Example1',
    link: '/main/example1',
    home: true,
  },
  {
    title:'Login',
    group : true
  },
  {
    title: 'Auth',
    children: [
      { title: 'Login', link: '/auth/login' },
      { title: 'register', link: '/auth/register' },
      { title: 'logout', link: '/auth/logout' },
      { title: 'request-password', link: '/auth/request-password' },
      { title: 'reset-password', link: '/auth/reset-password' },
    ],
  },
  
  {
    title:'Module example',
    group : true
  },
  {
    title: 'SUB-MENUS',
    children:[
     {
       title:'SUB-MENU1',
       link: '/main'
     },
     {
       title:'SUB-MENU2',
       link: '/main'
     },
     {
       title:'SUB-MENU3',
       link: '/main'
     }
    ]
  }
];
