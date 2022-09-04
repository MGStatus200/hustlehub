import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
// import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AdvertiseComponent } from './components/pages/advertise/advertise.component';
import { UserbadgeComponent } from './components/partials/userbadge/userbadge.component';
import { SellproductComponent } from './components/pages/sellproduct/sellproduct.component';
import { SearchComponent } from './components/partials/search/search.component';
import { CategoriesComponent } from './components/partials/categories/categories.component';
import { ProdSearchComponent } from './components/partials/prod-search/prod-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdvertiseComponent,
    UserbadgeComponent,
    SellproductComponent,
    SearchComponent,
    CategoriesComponent,
    ProdSearchComponent,
    // NgToastModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
