import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';


 const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'add-property', component: AddPropertyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRouterModule {

}
