import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

type ThemeOption = 'Coding vibes' | 'Gaming' | 'Da Projekts' | 'Foods';
type PlayerOption = '1 player' | '2 players';
type BoardSizeOption = '4 x 4' | '4 x 6' | '6 x 6';

const THEME_PREVIEW_BY_OPTION: Record<ThemeOption, string> = {
  'Coding vibes': 'img/ThemeVisualCoding.svg',
  Gaming: 'img/ThemeVisualGame.svg',
  'Da Projekts': 'img/ThemeVisualDA.svg',
  Foods: 'img/ThemeVisualFood.svg',
};

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  protected readonly themeOptions: ThemeOption[] = [
    'Coding vibes',
    'Gaming',
    'Da Projekts',
    'Foods',
  ];

  protected readonly playerOptions: PlayerOption[] = ['1 player', '2 players'];

  protected readonly boardSizeOptions: BoardSizeOption[] = ['4 x 4', '4 x 6', '6 x 6'];

  protected readonly selectedTheme = signal<ThemeOption | null>(null);
  protected readonly hoveredTheme = signal<ThemeOption | null>(null);
  protected readonly selectedPlayer = signal<PlayerOption | null>(null);
  protected readonly selectedBoardSize = signal<BoardSizeOption | null>(null);
  protected readonly previewTheme = computed<ThemeOption>(
    () => this.hoveredTheme() ?? this.selectedTheme() ?? 'Coding vibes',
  );
  protected readonly selectedThemePreview = computed(
    () => THEME_PREVIEW_BY_OPTION[this.previewTheme()],
  );
  protected readonly selectedThemePreviewAlt = computed(
    () => `${this.previewTheme()} theme preview`,
  );
  protected readonly summaryEntries = computed(() => [
    this.selectedTheme() ?? 'Theme',
    this.selectedPlayer() ?? 'Player',
    this.selectedBoardSize() ?? 'Board size',
  ]);
  protected readonly hasAnySelection = computed(
    () =>
      this.selectedTheme() !== null ||
      this.selectedPlayer() !== null ||
      this.selectedBoardSize() !== null,
  );
  protected readonly canStart = computed(
    () =>
      this.selectedTheme() !== null &&
      this.selectedPlayer() !== null &&
      this.selectedBoardSize() !== null,
  );

  constructor() {
    this.document.body.setAttribute('data-theme', 'code-vibes');
  }

  protected selectTheme(theme: ThemeOption): void {
    this.selectedTheme.set(theme);
  }

  protected setHoveredTheme(theme: ThemeOption | null): void {
    this.hoveredTheme.set(theme);
  }

  protected isThemeHighlighted(theme: ThemeOption): boolean {
    return this.hoveredTheme() ? this.hoveredTheme() === theme : this.selectedTheme() === theme;
  }

  protected selectPlayer(player: PlayerOption): void {
    this.selectedPlayer.set(player);
  }

  protected selectBoardSize(boardSize: BoardSizeOption): void {
    this.selectedBoardSize.set(boardSize);
  }

  protected startGame(): void {
    if (!this.canStart()) {
      return;
    }

    this.router.navigate(['/game'], {
      queryParams: {
        theme: this.selectedTheme(),
        player: this.selectedPlayer(),
        boardSize: this.selectedBoardSize(),
      },
    });
  }
}
