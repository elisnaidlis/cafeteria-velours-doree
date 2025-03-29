import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoffeesComponent } from './pages/coffees/coffees.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coffee', component: CoffeesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'contact', component: ContactComponent }
];
