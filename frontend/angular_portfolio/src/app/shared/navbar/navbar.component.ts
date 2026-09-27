import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isScrolled = false;
  
  // Ajout de la variable manquante pour le menu mobile
  menuOpen = false;

  @HostListener('window:scroll', [])
  onScroll(){
    this.isScrolled = window.scrollY > 50;
  }

}