import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initFilters();
  }

  private initFilters(): void {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillItems = document.querySelectorAll('.skill-item');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active le bouton cliqué
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = (btn as HTMLElement).dataset['filter'];

        skillItems.forEach(item => {
          const category = (item as HTMLElement).dataset['category'];

          if (filter === 'all' || category === filter) {
            (item as HTMLElement).style.display = 'block';
          } else {
            (item as HTMLElement).style.display = 'none';
          }
        });
      });
    });
  }
}