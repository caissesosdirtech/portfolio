import { Component } from '@angular/core';

/** Section « Parcours », présentée comme un git log. */
@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly etapes = [
    {
      date: "2014 → aujourd'hui",
      titre: "Ministère de l'Urbanisme et de l'Habitat",
      texte: "Développement d'applications, administration système et réseau, maintenance informatique.",
      actuel: true,
    },
    {
      date: '2013',
      titre: 'Stage — site web du ministère',
      texte: 'Mise en place du site, administration réseau et base de données.',
    },
    {
      date: '2012',
      titre: 'Projet Java — site du Lycée Serigne Ahmadou Ndack Seck de Thiès',
      texte: "Conception et développement du site web de l'établissement.",
    },
    {
      date: '2011',
      titre: 'Université Alioune Diop de Bambey',
      texte: "Licence professionnelle en Développement et Administration d'Applications Web (D2AW).",
    },
  ];
}
