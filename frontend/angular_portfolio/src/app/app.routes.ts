import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ExperienceComponent } from './pages/experience/experience.component';
export const routes: Routes = [

    { path: '', component: HomeComponent },

    { path: 'about', component: AboutComponent },

    { path: 'skills', component: SkillsComponent },

    { path: 'projects', component: ProjectsComponent },

    { path: 'services', component: ServicesComponent },

    { path: 'contact', component: ContactComponent },

    { path: 'stats', component: StatsComponent },

    { path:'experience', component: ExperienceComponent },


];