import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddPropertyComponent } from './add-property/add-property.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AddPropertyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
