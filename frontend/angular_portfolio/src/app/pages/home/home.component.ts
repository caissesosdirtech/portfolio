import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';

/** Page unique : accueil + toutes les sections, reliées par des ancres. */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, ProjectsComponent, SkillsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly chiffres = [
    { valeur: '10+', libelle: 'projets livrés' },
    { valeur: '2014', libelle: 'en poste depuis' },
    { valeur: 'Web + mobile', libelle: 'un seul interlocuteur' },
  ];
}
