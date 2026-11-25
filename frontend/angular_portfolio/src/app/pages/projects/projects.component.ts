import { Component } from '@angular/core';

interface Projet {
  titre: string;
  secteur: string;
  description: string;
  stack: string[];
  image?: string;
  enLigne?: boolean;
  lienSite?: string;
  lienCode?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  /** Projet mis en avant en grand. */
  readonly vedette: Projet = {
    titre: 'Fast & Delicious',
    secteur: 'Restauration · Web + mobile',
    description:
      'Commande en ligne par table ou en livraison, paiement Wave & Orange Money, suivi en temps réel ' +
      'de la cuisine, tickets et application mobile pour le personnel.',
    stack: ['Django', 'DRF', 'Channels', 'React', 'Flutter', 'PostgreSQL'],
    image: 'assets/images/logo-fast-delicious.jpg',
    enLigne: true,
    lienSite: 'https://menu-concession5.com',
  };

  /** Autres projets. Ajoutez lienSite / lienCode pour afficher les boutons. */
  readonly projets: Projet[] = [
    {
      titre: 'Parcelles Véto',
      secteur: 'Santé animale · Web + mobile',
      description:
        "Gestion d'une clinique vétérinaire et de sa pharmacie : consultations, ordonnances PDF, ventes, caisse et stock.",
      stack: ['Django', 'DRF', 'Flutter', 'PostgreSQL'],
      image: 'assets/images/parcemllesveto.png',
    },
    {
      titre: 'Keur Khadim Boutique',
      secteur: 'Commerce · Web',
      description: "Plateforme e-commerce et gestion centralisée d'une boutique de tissus, en gros et au détail.",
      stack: ['Django', 'Python'],
      image: 'assets/images/khadimeboutique.png',
    },
    {
      titre: 'Caisse sociale',
      secteur: 'Mutuelle · Web',
      description:
        'Gestion des adhérents, cotisations et prêts, avec tableau de bord administratif et exports PDF / Excel.',
      stack: ['Django', 'Angular', 'API REST'],
    },
  ];
}
