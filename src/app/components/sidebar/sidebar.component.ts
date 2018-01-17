import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    type: string;
    submenu: object[];
}
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Dashboard',  icon: 'dashboard', class: '', type:'dropdown', submenu:[
        {
            path: 'dashboard', title: 'Submenu 1',  icon: 'dashboard', class: '', type:'link', submenu:[]
        },
        {
            path: '', title: 'Submenu 2',  icon: 'dashboard', class: '', type:'dropdown', submenu:[
                {
                    path: 'user-profile', title: 'Sub Submenu 1',  icon: 'dashboard', class: '', type:'link', submenu:[]
                },
                {
                    path: 'table-list', title: 'Sub Submenu 2',  icon: 'dashboard', class: '', type:'link', submenu:[]
                }
            ]
        },
        {
            path: 'typography', title: 'Submenu 3',  icon: 'dashboard', class: '', type:'link', submenu:[]
        }
        ]
    }
    ,
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '', type:'link', submenu:[] },
    { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '', type:'link', submenu:[] },
    { path: 'typography', title: 'Typography',  icon:'library_books', class: '', type:'link', submenu:[] },
    { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '', type:'dropdown', submenu:[
        {
            path: 'dashboard', title: 'Submenu 1',  icon: 'dashboard', class: '', type:'link', submenu:[]
        },
        {
            path: 'dashboard', title: 'Submenu 2',  icon: 'dashboard', class: '', type:'dropdown', submenu:[
                {
                    path: 'dashboard', title: 'Sub Submenu 1',  icon: 'dashboard', class: '', type:'link', submenu:[]
                },
                {
                    path: 'dashboard', title: 'Sub Submenu 2',  icon: 'dashboard', class: '', type:'link', submenu:[]
                }
            ]
        },
        {
            path: 'dashboard', title: 'Submenu 3',  icon: 'dashboard', class: '', type:'link', submenu:[
                {
                    path: 'dashboard', title: 'Sub Submenu 1',  icon: 'dashboard', class: '', type:'link', submenu:[]
                },
                {
                    path: 'dashboard', title: 'Sub Submenu 2',  icon: 'dashboard', class: '', type:'link', submenu:[]
                }
            ]
        }
        ]
    },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '', type:'link', submenu:[] },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '', type:'link', submenu:[] },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro', type:'link', submenu:[] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  selected: RouteInfo;

  constructor() { this.menuItems = ROUTES; }

  ngOnInit() {
   
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  select(item){
    this.selected = (this.selected === item ? null : item);
}

 isActive(type: string): string{
    let result='';
    if(type == 'link'){
        result = 'active';
    }else{
        result='';        
    }
    console.log('---' + result + ' ---');
    return result;
  }

  isLink(item: RouteInfo){
    return this.selected === item && item.type == 'link';
  }

  print(s){
    console.log(s);
  }
}
