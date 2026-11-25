import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);

  isScrolled = false;
  menuOpen = false;

  readonly liens = [
    { ancre: 'services', libelle: 'Services' },
    { ancre: 'projets', libelle: 'Projets' },
    { ancre: 'stack', libelle: 'Stack' },
    { ancre: 'parcours', libelle: 'Parcours' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 12;
  }

  fermerMenu(): void {
    this.menuOpen = false;
  }
}
