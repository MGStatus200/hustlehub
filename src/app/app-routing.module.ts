import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/pages/add-event/add-event.component';
import { AddServiceComponent } from './components/pages/add-service/add-service.component';
import { AdvertiseComponent } from './components/pages/advertise/advertise.component';
import { EventsInviteComponent } from './components/pages/events-invite/events-invite.component';
import { HireServiceComponent } from './components/pages/hire-service/hire-service.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ManageshopComponent } from './components/pages/manageshop/manageshop.component';
import { PaymentComponent } from './components/pages/payment/payment.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SellproductComponent } from './components/pages/sellproduct/sellproduct.component';
import { SubscriptionComponent } from './components/pages/subscription/subscription.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { SingleEventComponent } from './components/partials/single-event/single-event.component';
import { SingleProdComponent } from './components/partials/single-prod/single-prod.component';
import { SingleServiceComponent } from './components/partials/single-service/single-service.component';

const routes: Routes = [
  { path: '', component:WelcomeComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'advertise',component:AdvertiseComponent},
  {path:'addProduct',component:SellproductComponent},
  {path:'payment',component:PaymentComponent},
  {path:'plan',component:SubscriptionComponent},
  {path:'manageItems',component:ManageshopComponent},

  {path:'home',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'category/:category',component:HomeComponent},
  {path:'sProduct/:id',component:SingleProdComponent},

  {path:'events',component:EventsInviteComponent},
  {path:'esearch/:esearchTerm',component:EventsInviteComponent},
  {path:'ecategory/:ecategory',component:EventsInviteComponent},
  {path:'sEvent/:id',component:SingleEventComponent},
  {path:'addEvent',component:AddEventComponent},

  {path:'hire',component:HireServiceComponent},
  {path:'hsearch/:hsearchTerm',component:HireServiceComponent},
  {path:'hcategory/:hcategory',component:HireServiceComponent},
  {path:'sService/:id',component:SingleServiceComponent},
  {path:'addService',component:AddServiceComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
