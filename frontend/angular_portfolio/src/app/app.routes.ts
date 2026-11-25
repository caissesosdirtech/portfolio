import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

/**
 * Le portfolio tient sur une seule page (sections reliées par des ancres).
 * Les anciennes adresses (/about, /projects…) renvoient vers l'accueil
 * pour que les liens déjà partagés continuent de fonctionner.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Papa Mbaye CISSE — Développeur Fullstack Web & Mobile' },
  { path: '**', redirectTo: '' },
];
