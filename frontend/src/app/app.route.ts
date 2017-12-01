import { Routes, RouterModule }  from '@angular/router';
import { ManageSubscriptionComponent } from './admin/manage-subscription/manage-subscription.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
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
import { GenerateContractComponent } from './company/generate-contract/generate-contract.component';
import { CategoryComponent } from './admin/category/category.component';
import { CreateTemplateComponent } from './admin/create-template/create-template.component';
import { EditComponent } from './admin/create-template/edit/edit.component';
import { ForgotComponent } from './authentication/forgot/forgot.component';
import { AdminRouteGuard } from './routeGuard';
import { CustomerRouteGuard } from './routeGuard';
import { CompanyRouteGuard } from './routeGuard';
import { ManageCustomerComponent } from './admin/manage-users/manage-customer/manage-customer.component';
import { ManageCompanyComponent } from './admin/manage-users/manage-company/manage-company.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepassComponent } from './authentication/changepass/changepass.component';
import { TemplateComponent } from './company/generate-contract/template/template.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { AdminchangepassComponent } from './authentication/adminchangepass/adminchangepass.component';
import { MilestonesComponent } from './admin/view-contract/milestones/milestones.component';
import { ViewCustomerContractComponent } from './customer/view-contract/view-contract.component';
import { CustomerContractMilestonesComponent } from './customer/view-contract/milestones/milestones.component';
import { ViewContractDetailComponent } from './admin/view-contract/details/details.component';
import { ViewCustomerContractDetailComponent } from './customer/view-contract/details/details.component';
import { ViewMilestoneHistory } from './admin/view-contract/milestones/milestone_history.component';
import { ViewCustomerMilestoneHistory } from './customer/view-contract/milestones/milestone_history.component';
import { EditMilestoneComponent } from './admin/view-contract/milestones/edit/edit_milestone.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'viewMilestones',
    component: MilestonesComponent
  },
  {
    path: 'viewContractDetails',
    component: ViewContractDetailComponent
  },
  {
    path: 'viewMilestoneHistory',
    component: ViewMilestoneHistory
  },
  {
    path: 'Template',
    component: TemplateComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
 { path: 'editMilestone', pathMatch: 'full', component:EditMilestoneComponent},

  { path: 'customer', children: [
    { path: 'dashboard', pathMatch: 'full', component: CustomerComponent,canActivate: [CustomerRouteGuard]},
    { path: 'contract', pathMatch: 'full', component:ViewContractComponent,canActivate: [CustomerRouteGuard]}, 
    { path: 'profile', pathMatch: 'full', component:ProfileComponent ,canActivate: [CustomerRouteGuard]},
    { path: 'generateContract', pathMatch: 'full', component:GenerateContractComponent ,canActivate: [CustomerRouteGuard]},
    { path: 'changepassword', pathMatch: 'full', component:ChangepassComponent ,canActivate: [CustomerRouteGuard]},
    { path: 'ViewContract', pathMatch: 'full', component:ViewCustomerContractComponent ,canActivate: [CustomerRouteGuard]},
    { path: 'ViewMilestones', pathMatch: 'full', component:CustomerContractMilestonesComponent,canActivate: [CustomerRouteGuard]},    
    { path: 'viewContractDetails', pathMatch: 'full', component:ViewCustomerContractDetailComponent,canActivate: [CustomerRouteGuard]},    
    { path: 'viewMilestoneHistory', pathMatch: 'full', component:ViewCustomerMilestoneHistory,canActivate: [CustomerRouteGuard]},    
    { path: 'upgrade', pathMatch: 'full', component:UpgradeComponent ,canActivate: [CustomerRouteGuard]},
  ]},
  { path: 'company', children: [
    { path: 'dashboard', pathMatch: 'full', component: CompanyComponent,canActivate: [CompanyRouteGuard]},
    { path: 'contract', pathMatch: 'full', component:ViewContractComponent,canActivate: [CompanyRouteGuard]},
    { path: 'profile', pathMatch: 'full', component:ProfileComponent ,canActivate: [CompanyRouteGuard]},
    { path: 'generateContract', pathMatch: 'full', component:GenerateContractComponent ,canActivate: [CompanyRouteGuard]},
    { path: 'changepassword', pathMatch: 'full', component:ChangepassComponent ,canActivate: [CompanyRouteGuard]},
    { path: 'ViewContract', pathMatch: 'full', component:ViewContractComponent ,canActivate: [CompanyRouteGuard]},
    { path: 'ContractDetail', pathMatch: 'full', component:ViewContractDetailComponent ,canActivate: [CompanyRouteGuard]},
    { path: 'upgrade', pathMatch: 'full', component:UpgradeComponent ,canActivate: [CompanyRouteGuard]},    
  ]},
  { path: 'admin', children: [
    { path: 'dashboard', pathMatch: 'full', component: AdminComponent,canActivate: [AdminRouteGuard]},
    { path: 'managesubscription', pathMatch: 'full', component:ManageSubscriptionComponent,canActivate: [AdminRouteGuard]},
    { path: 'profile', pathMatch: 'full', component:AdminProfileComponent ,canActivate: [AdminRouteGuard]}, 
    { path: 'changepassword', pathMatch: 'full', component:AdminchangepassComponent ,canActivate: [AdminRouteGuard]},
    { path: 'manageTemplate', pathMatch: 'full', component:ManageTemplatesComponent ,canActivate: [AdminRouteGuard]},
    { path: 'reports', pathMatch: 'full', component:ReportsComponent ,canActivate: [AdminRouteGuard]},
    { path: 'addCategory', pathMatch: 'full', component:CategoryComponent ,canActivate: [AdminRouteGuard]},
    { path: 'editTemplate', pathMatch: 'full', component:EditComponent ,canActivate: [AdminRouteGuard]},
    { path: 'createTemplate', pathMatch: 'full', component:CreateTemplateComponent ,canActivate: [AdminRouteGuard]},
    { path: 'managecustomer', pathMatch: 'full', component:ManageCustomerComponent ,canActivate: [AdminRouteGuard]},
    { path: 'managecompany', pathMatch: 'full', component:ManageCompanyComponent ,canActivate: [AdminRouteGuard]},
  ]},
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'payment',
    component: PaymentPlansComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'termsCondition',
    component: TermsandConditionComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
];

export const appRouterModule = RouterModule.forRoot(routes);