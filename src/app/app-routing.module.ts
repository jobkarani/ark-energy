import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path:'home',component:LandingPageComponent},
  {path:'get-started',component:GetStartedComponent},
  {path:'success',component:SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
