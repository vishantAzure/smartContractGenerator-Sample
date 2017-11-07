import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRouterModule } from "./app.route";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { CustomerComponent } from './customer/customer.component';
import { ManageSubscriptionComponent } from './admin/manage-subscription/manage-subscription.component';
import { GenerateContractComponent } from './company/generate-contract/generate-contract.component';
import { MainComponent } from './authentication/main.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FAQComponent } from './faq/faq.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { ManageTemplatesComponent } from './admin/manage-templates/manage-templates.component';
import { ViewContractComponent } from './admin/view-contract/view-contract.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsandConditionComponent } from './termsand-condition/termsand-condition.component';
import { PaymentPlansComponent } from './payment-plans/payment-plans.component';
import { ServicesComponent } from './services/services.component';
import { CategoryComponent } from './admin/category/category.component';
import { CreateTemplateComponent } from './admin/create-template/create-template.component';
import { EditComponent } from './admin/create-template/edit/edit.component';
import { ForgotComponent } from './authentication/forgot/forgot.component';
import { CustomerRouteGuard } from './routeGuard';
import { AdminRouteGuard } from './routeGuard';
import { ServiceProviderRouteGuard } from './routeGuard';
import { CompanyRouteGuard } from './routeGuard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManageCustomerComponent } from './admin/manage-users/manage-customer/manage-customer.component';
import { ManageServiceproviderComponent } from './admin/manage-users/manage-serviceprovider/manage-serviceprovider.component';
import { ManageCompanyComponent } from './admin/manage-users/manage-company/manage-company.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepassComponent } from './authentication/changepass/changepass.component';
import { TemplateComponent } from './company/generate-contract/template/template.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CompanyComponentSideMenu } from './sidemenu/company/company.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { AdminchangepassComponent } from './authentication/adminchangepass/adminchangepass.component'
import { SidenavigationService } from './sidenavigation.service';
import { DateFilterPipe } from './date-filter.pipe';
import { CKEditorComponent } from '../../node_modules/ng2-ckeditor/src/ckeditor.component';
import { DetailComponent } from './admin/view-contract/detail/detail.component';

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
    AboutComponent,
    BlogComponent,
    CKEditorComponent,
    FAQComponent,
    ReportsComponent,
    ManageTemplatesComponent,
    ViewContractComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsandConditionComponent,
    PaymentPlansComponent,
    ServicesComponent,
    CategoryComponent,
    CreateTemplateComponent,
    EditComponent,
    ForgotComponent,
    HeaderComponent,
    FooterComponent,
    ManageCustomerComponent,
    ManageServiceproviderComponent,
    ManageCompanyComponent,
    UpgradeComponent,
    ProfileComponent,
    ChangepassComponent,
    TemplateComponent,
    SidemenuComponent,
    CompanyComponentSideMenu,
    AdminProfileComponent,
    AdminchangepassComponent,
    DetailComponent,
    DateFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRouterModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToasterModule
  ],
  exports: [CKEditorComponent],
  providers: [CustomerRouteGuard,CompanyRouteGuard,AdminRouteGuard,ServiceProviderRouteGuard,SidenavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
