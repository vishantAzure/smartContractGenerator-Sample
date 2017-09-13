import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRouterModule } from "./app.route";


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { CustomerComponent } from './customer/customer.component';
import { ManageSubscriptionComponent } from './admin/manage-subscription/manage-subscription.component';
import { GenerateContractComponent } from './company/generate-contract/generate-contract.component';
import { MainComponent } from './authentication/main.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent,
    CompanyComponent,
    ServiceProviderComponent,
    CustomerComponent,
    ManageSubscriptionComponent,
    GenerateContractComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRouterModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
