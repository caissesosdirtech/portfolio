import { Component } from '@angular/core';

/** Section « Stack » : technologies regroupées par domaine (sans pourcentages). */
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groupes = [
    { dossier: 'frontend/', outils: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'HTML · CSS · JavaScript'] },
    { dossier: 'backend/', outils: ['Python · Django · DRF', 'Node.js', 'Spring Boot', 'API REST · WebSockets'] },
    { dossier: 'mobile/', outils: ['Flutter', 'React Native', 'Notifications push (Firebase)'] },
    { dossier: 'data & ops/', outils: ['PostgreSQL', 'Supabase · Firebase', 'Git · GitHub · Docker', 'Railway · Cloudflare'] },
  ];
}
