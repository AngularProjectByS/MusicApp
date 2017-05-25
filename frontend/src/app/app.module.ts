import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home';
import { PhotoListComponent } from './components/photo-list/photo-list';
import { SidePanel } from './components/side-panel/side-panel';
import { NavBar } from './components/nav-bar/nav-bar';
import { Register } from './components/register/register';
import { Login } from './components/login/login.component';

import { PhotoService } from './services/photo-service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanel,
    NavBar,
    Register,
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      PhotoService, 
      RegisterService,
      LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
