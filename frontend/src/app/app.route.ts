import { Routes, RouterModule }  from '@angular/router';
import { ManageSubscriptionComponent } from './admin/manage-subscription/manage-subscription.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { CustomerComponent } from './customer/customer.component';
import { MainComponent } from './authentication/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'managesubscription',
    component: ManageSubscriptionComponent
  },
  {
    path: 'serviceprovider',
    component: ServiceProviderComponent
  },
];

export const appRouterModule = RouterModule.forRoot(routes);