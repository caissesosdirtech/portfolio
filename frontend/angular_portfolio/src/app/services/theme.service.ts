import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

/**
 * Thème sombre / clair.
 * - Au premier passage : suit le réglage de l'appareil du visiteur.
 * - Ensuite : retient son choix (localStorage).
 * Le script dans index.html applique le thème avant l'affichage
 * pour éviter un flash de la mauvaise couleur.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.initialTheme());

  constructor() {
    this.apply(this.theme());
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* navigation privée : on ne retient simplement pas le choix */
    }
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      /* ignore */
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private apply(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
