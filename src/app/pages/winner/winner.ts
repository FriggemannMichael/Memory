import { DOCUMENT } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

type ThemeKey = 'code-vibes' | 'gaming';

@Component({
  selector: 'app-winner',
  standalone: true,
  templateUrl: './winner.html',
  styleUrl: './winner.scss',
})
export class Winner {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  protected readonly scoreBlue = computed(() => +(this.queryParams().get('scoreBlue') ?? 0));
  protected readonly scoreOrange = computed(() => +(this.queryParams().get('scoreOrange') ?? 0));
  protected readonly isTwoPlayer = computed(
    () => this.queryParams().get('player') === '2 players',
  );
  protected readonly isGaming = computed(
    () => this.queryParams().get('theme') === 'gaming',
  );

  protected readonly winner = computed<'blue' | 'orange' | 'draw'>(() => {
    if (!this.isTwoPlayer()) return 'blue';
    const b = this.scoreBlue();
    const o = this.scoreOrange();
    if (o > b) return 'orange';
    if (b > o) return 'blue';
    return 'draw';
  });

  protected readonly winnerImage = computed(() => {
    if (this.winner() === 'draw') return null;
    if (this.isGaming()) {
      return 'img/pockal.svg';
    }
    return this.winner() === 'orange' ? 'img/chess_pawnorange.svg' : 'img/chess_pawnblue.svg';
  });

  constructor() {
    const theme = (this.route.snapshot.queryParamMap.get('theme') ?? 'code-vibes') as ThemeKey;
    this.document.body.setAttribute('data-theme', theme);
  }

  protected goToSettings(): void {
    this.router.navigate(['/settings']);
  }
}
