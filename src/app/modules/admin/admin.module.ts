import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './components/admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ProductsComponent } from './components/products/products.component';
import { HighlightDirective } from 'src/app/appDirective/highlight.directive';
import { DropdownDirective } from 'src/app/appDirective/dropdown.directive';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgChartsModule } from 'ng2-charts';
import { DataService } from './service/data.service';
import { PiechartsComponent } from './components/analytics/piecharts/piecharts.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ProfileComponent,
    HomeComponent,
    AnalyticsComponent,
    ProductsComponent,
    HighlightDirective,
    DropdownDirective,
    AdminProfileComponent,
    UserDetailsComponent,
    PiechartsComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgSelectModule
  ],
  providers: [DataService]
})
export class AdminModule { }
