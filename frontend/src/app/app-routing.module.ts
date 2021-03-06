import { CalendarComponent } from './components/calendar/calendar.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  { path: "welcome-page", component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'help-someone', component: MarketplaceComponent},
  { path: 'get-help', component: CreateTaskComponent},
  { path: 'schedule', component: CalendarComponent},
  { path: '', redirectTo: 'welcome-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
