import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

type Etat = 'idle' | 'envoi' | 'ok' | 'erreur';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly contactService = inject(ContactService);

  // ▼ Coordonnées affichées : modifiez-les ici
  readonly email = 'pmctech787@gmail.com';
  readonly telephone = '+221 77 547 00 87';
  readonly telephoneLien = '+221775470087';
  readonly adresse = 'Médina, Dakar — Sénégal';
  readonly reseaux = [
    // Ajoutez vos liens GitHub et LinkedIn ici, ils s'afficheront automatiquement
    { nom: 'GitHub', url: '' },
    { nom: 'LinkedIn', url: '' },
    { nom: 'WhatsApp', url: 'https://wa.me/221775470087' },
  ].filter((r) => r.url);

  readonly typesProjet = [
    'Application web',
    'Application mobile',
    'Site vitrine / e-commerce',
    'API / intégration paiement',
    'Autre',
  ];

  form = { name: '', email: '', subject: this.typesProjet[0], message: '' };
  // signal : l'écran se met à jour quand la réponse du serveur arrive (Angular sans zone.js)
  readonly etat = signal<Etat>('idle');

  envoyer(f: NgForm): void {
    if (f.invalid || this.etat() === 'envoi') {
      f.control.markAllAsTouched();
      return;
    }
    this.etat.set('envoi');
    this.contactService.sendMessage(this.form).subscribe({
      next: () => {
        this.etat.set('ok');
        this.form = { name: '', email: '', subject: this.typesProjet[0], message: '' };
        f.resetForm(this.form);
      },
      error: () => this.etat.set('erreur'),
    });
  }
}
