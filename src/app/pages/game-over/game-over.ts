import { DOCUMENT } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

type ThemeKey = 'code-vibes' | 'gaming';

@Component({
  selector: 'app-game-over',
  standalone: true,
  templateUrl: './game-over.html',
  styleUrl: './game-over.scss',
})
export class GameOver {
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

  protected readonly winner = computed<'blue' | 'orange' | 'draw' | null>(() => {
    if (!this.isTwoPlayer()) return null;
    const b = this.scoreBlue();
    const o = this.scoreOrange();
    if (b > o) return 'blue';
    if (o > b) return 'orange';
    return 'draw';
  });

  constructor() {
    const theme = (this.route.snapshot.queryParamMap.get('theme') ?? 'code-vibes') as ThemeKey;
    this.document.body.setAttribute('data-theme', theme);
  }

  protected newGame(): void {
    this.router.navigate(['/settings']);
  }

  protected goHome(): void {
    this.router.navigate(['/']);
  }
}
