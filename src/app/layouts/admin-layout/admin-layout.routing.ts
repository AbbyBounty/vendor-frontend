import { OfferAddComponent } from './../../offer/offer-add/offer-add.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ServiceListComponent } from 'app/service/service-list/service-list.component';
import { OfferListComponent } from 'app/offer/offer-list/offer-list.component';
import { ServiceAddComponent } from 'app/service/service-add/service-add.component';
import { OrderListComponent } from 'app/order/order-list/order-list.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { OrderHistoryComponent } from 'app/order/order-history/order-history.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'services',        component: ServiceListComponent },
    { path: 'service-add',        component: ServiceAddComponent },
    { path: 'offer-add',        component: OfferAddComponent },
    { path: 'offers',        component: OfferListComponent },
    { path: 'order-list',        component: OrderListComponent },
    { path: 'customer',        component: CustomerComponent },
    { path: 'order-history',        component: OrderHistoryComponent },
];
