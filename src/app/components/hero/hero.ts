import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Button } from '../button/button';

@Component({
  selector: 'app-hero',
  imports: [Button],
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() subtitle = '';
  @Input() title = '';
  @Input() ctaLabel = '';
  @Output() onCta = new EventEmitter<void>();
}
