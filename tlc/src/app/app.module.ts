import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule }   from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { AddtenantComponent } from './addtenant/addtenant.component';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import 'hammerjs';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AddPropertyComponent,
    AddtenantComponent,

  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    // HttpModule,
    // MatButtonModule,
    // MatCheckboxModule,
  ],
  exports: [
      // MatButtonModule,
      // MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
