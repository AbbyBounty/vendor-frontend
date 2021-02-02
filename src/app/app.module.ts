import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from '@angular/forms';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceAddComponent } from './service/service-add/service-add.component';
import { MechanicListComponent } from './mechanic/mechanic-list/mechanic-list.component';
import { MechanicAddComponent } from './mechanic/mechanic-add/mechanic-add.component';
import { OfferAddComponent } from './offer/offer-add/offer-add.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderHistoryComponent } from './order/order-history/order-history.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule }from '@angular/common/http';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ServiceListComponent,
    ServiceAddComponent,
    MechanicListComponent,
    MechanicAddComponent,
    OfferAddComponent,
    OfferListComponent,
    OrderListComponent,
    CustomerComponent,
    OrderHistoryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
