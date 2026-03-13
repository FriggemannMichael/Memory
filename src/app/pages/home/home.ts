import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) {}

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }
}
