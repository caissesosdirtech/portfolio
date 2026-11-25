import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = [
    {
      icone: 'web',
      titre: 'Applications web métier',
      texte: 'Gestion, caisse, stocks, tableaux de bord : des outils sur mesure pour votre activité.',
    },
    {
      icone: 'mobile',
      titre: 'Applications mobiles',
      texte: 'Android et iOS avec Flutter, connectées à votre back-office, avec notifications.',
    },
    {
      icone: 'api',
      titre: 'API & paiements',
      texte: 'API REST sécurisées, temps réel, intégration Wave et Orange Money.',
    },
    {
      icone: 'site',
      titre: 'Sites vitrines & e-commerce',
      texte: 'Rapides, bien référencés et lisibles sur téléphone, avec votre nom de domaine.',
    },
  ];
}
