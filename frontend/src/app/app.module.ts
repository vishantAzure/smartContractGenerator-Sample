import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRouterModule } from "./app.route";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDatePickerModule } from 'mydatepicker';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
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
import { CompanyRouteGuard } from './routeGuard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManageCustomerComponent } from './admin/manage-users/manage-customer/manage-customer.component';
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
import { MilestonesComponent } from './admin/view-contract/milestones/milestones.component';
import { ViewCustomerContractComponent } from './customer/view-contract/view-contract.component';
import { CustomerContractMilestonesComponent } from './customer/view-contract/milestones/milestones.component';
import { ViewContractDetailComponent } from './admin/view-contract/details/details.component';
import { ViewCustomerContractDetailComponent } from './customer/view-contract/details/details.component';
import { ViewMilestoneHistory } from './admin/view-contract/milestones/milestone_history.component';
import { ViewCustomerMilestoneHistory } from './customer/view-contract/milestones/milestone_history.component';
import { EditMilestoneComponent } from './admin/view-contract/milestones/edit/edit_milestone.component';
import { safeHtml } from './safe-html';
import { CountoModule }  from 'angular2-counto';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent,
    CompanyComponent,
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
    ManageCompanyComponent,
    UpgradeComponent,
    ProfileComponent,
    ChangepassComponent,
    TemplateComponent,
    SidemenuComponent,
    CompanyComponentSideMenu,
    AdminProfileComponent,
    AdminchangepassComponent,
    MilestonesComponent,
    DateFilterPipe,
    ViewCustomerContractComponent,
    CustomerContractMilestonesComponent,
    ViewContractDetailComponent,
    ViewCustomerContractDetailComponent,
    ViewMilestoneHistory,
    ViewCustomerMilestoneHistory,
    EditMilestoneComponent,
    safeHtml,    
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    appRouterModule,
    HttpModule,
    FormsModule,
    CountoModule
  ],
  exports: [CKEditorComponent],
  providers: [CustomerRouteGuard,CompanyRouteGuard,AdminRouteGuard,SidenavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
