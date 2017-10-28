import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AddPropertyComponent } from './add-property/add-property.component'
import { AddtenantComponent } from './addtenant/addtenant.component'


 const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'property', component: AddPropertyComponent},
  {path: 'tenant', component: AddtenantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRouterModule {

}
