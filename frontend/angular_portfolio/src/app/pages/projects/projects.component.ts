import { Component, signal } from '@angular/core';

interface Projet {
  titre: string;
  secteur: string;
  description: string;
  stack: string[];
  image?: string;
  /** Pour un logo : l'image est affichée en entier sur cette couleur de fond. */
  imageFond?: string;
  enLigne?: boolean;
  lienSite?: string;
  lienCode?: string;
  /**
   * Compte de démonstration affiché sur la carte.
   * N'indiquez QUE les accès d'une version de démo avec des données fictives,
   * jamais ceux du site d'un client avec ses vraies données.
   */
  demo?: { url: string; identifiant: string; motDePasse: string };
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  /** Nom du projet dont un accès de démo vient d'être copié (pour afficher « Copié »). */
  readonly copie = signal<string | null>(null);

  copier(p: Projet, texte: string): void {
    navigator.clipboard?.writeText(texte).then(
      () => {
        this.copie.set(p.titre + texte);
        setTimeout(() => this.copie.set(null), 1500);
      },
      () => {},
    );
  }

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
      lienSite: 'https://parcellesveto-thies.vet/',
      // À remplir quand la version de démo existera, par exemple :
      // demo: { url: 'https://demo.parcellesveto-thies.vet/', identifiant: 'demo', motDePasse: 'Demo2026' },
    },
    {
      titre: 'Gestion de flotte — suivi GPS',
      secteur: 'Parc automobile · ERP Odoo',
      description:
        "Module Odoo pour suivre une flotte de véhicules : carte en direct, historique des trajets, " +
        "zones tracées par l'administrateur et alertes automatiques quand un véhicule sort de sa zone.",
      stack: ['Odoo 19', 'Python', 'OWL / JavaScript', 'Leaflet', 'Traccar', 'PostgreSQL'],
      image: 'assets/images/gestion-flotte.jpg',
      imageFond: '#ffffff',
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
      image: 'assets/images/caisse-sociale.jpg',
      imageFond: '#ffffff',
    },
  ];
}
