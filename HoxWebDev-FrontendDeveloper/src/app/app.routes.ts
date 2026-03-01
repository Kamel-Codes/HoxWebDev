import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutComponent } from './feature/about/about.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { ServicesComponent } from './feature/services/services.component';
import { ContactComponent } from './feature/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent}
];