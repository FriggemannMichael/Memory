import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() subtitle = '';
  @Input() title = '';
  @Input() ctaLabel = '';
  @Output() onCta = new EventEmitter<void>();
}
