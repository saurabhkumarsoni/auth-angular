import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../auth/auth.guard';
import { PageNotFoundComponent } from '../../../components/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: '', component: AdminDashboardComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'analytics', component: AnalyticsComponent},
        {path: 'products', component: ProductsComponent},
        {path: 'profile', component: AdminProfileComponent},
        { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
        {path: '**', component: PageNotFoundComponent}
      ],
    },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
