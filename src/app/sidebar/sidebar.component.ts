import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/order-list', title: 'order', icon: 'nc-user-run', class: '' },
    { path: '/mechanics', title: 'Mehcanic List', icon: 'nc-settings', class: '' },
    { path: '/services', title: 'My Services', icon: 'nc-bullet-list-67', class: '' },
    { path: '/offers', title: 'offers', icon: 'nc-tag-content', class: '' },

    { path: '/order-history', title: 'Order History', icon: 'nc-single-copy-04', class: '' },

    { path: '/icons', title: 'Icons', icon: 'nc-diamond', class: '' },
    { path: '/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
    { path: '/user', title: 'vendor Profile', icon: 'nc-single-02', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
