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
      {
        title: 'Login',
        link: '/auth/login',
      }
    ],
  },
  
  {
    title:'Module example',
    group : true
  },
  {
    title: 'Example2',
    children:[
     {
       title:'Example2Main',
       link: '/main/example2'
     },
     {
       title:'Example2 - menu1',
       link: '/main/example2/menu1'
     },
     {
       title:'Example2 - menu2',
       link: '/main/example2/menu2'
     }
    ]
  }
];
