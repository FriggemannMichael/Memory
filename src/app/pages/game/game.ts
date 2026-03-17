import { DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

type ThemeOption = 'Coding vibes' | 'Gaming' | 'Da Projekts' | 'Foods';
type PlayerOption = '1 player' | '2 players';
type BoardSizeOption = '4 x 4' | '6 x 4' | '6 x 6';
type ThemeKey = 'code-vibes' | 'gaming';

type CardItem = {
  id: string;
  designId: string;
  imageSrc: string;
  label: string;
};

const DEFAULT_THEME: ThemeOption = 'Coding vibes';
const DEFAULT_PLAYER: PlayerOption = '1 player';
const DEFAULT_BOARD_SIZE: BoardSizeOption = '4 x 4';

const THEME_KEY_BY_OPTION: Record<ThemeOption, ThemeKey> = {
  'Coding vibes': 'code-vibes',
  Gaming: 'gaming',
  'Da Projekts': 'code-vibes',
  Foods: 'code-vibes',
};

const BOARD_DIMENSIONS: Record<BoardSizeOption, { columns: number; rows: number }> = {
  '4 x 4': { columns: 4, rows: 4 },
  '6 x 4': { columns: 6, rows: 4 },
  '6 x 6': { columns: 6, rows: 6 },
};

const VIBES_ASSETS = [
  '/thems/vibes/angular.svg',
  '/thems/vibes/boot.svg',
  '/thems/vibes/cmd.svg',
  '/thems/vibes/css.svg',
  '/thems/vibes/db.svg',
  '/thems/vibes/dj.svg',
  '/thems/vibes/folder.svg',
  '/thems/vibes/git.svg',
  '/thems/vibes/gitbash.svg',
  '/thems/vibes/html.svg',
  '/thems/vibes/js.svg',
  '/thems/vibes/node.svg',
  '/thems/vibes/py.svg',
  '/thems/vibes/rea.svg',
  '/thems/vibes/sass.svg',
  '/thems/vibes/ts.svg',
  '/thems/vibes/vscode.svg',
  '/thems/vibes/vue.svg',
];

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  private readonly matchedCardIds = signal<string[]>([]);
  private readonly flippedCardIds = signal<string[]>([]);
  private readonly locked = signal(false);
  private readonly scores = signal<number[]>([0, 0]);
  private readonly activePlayerIndex = signal(0);

  protected readonly selectedTheme = computed<ThemeOption>(() => {
    const theme = this.queryParams().get('theme');
    return this.isThemeOption(theme) ? theme : DEFAULT_THEME;
  });

  protected readonly selectedPlayer = computed<PlayerOption>(() => {
    const player = this.queryParams().get('player');
    return this.isPlayerOption(player) ? player : DEFAULT_PLAYER;
  });

  protected readonly selectedBoardSize = computed<BoardSizeOption>(() => {
    const boardSize = this.queryParams().get('boardSize');
    return this.isBoardSizeOption(boardSize) ? boardSize : DEFAULT_BOARD_SIZE;
  });

  protected readonly activePlayer = computed(() => {
    if (this.selectedPlayer() === '1 player') return 'You';
    return this.activePlayerIndex() === 0 ? 'Blue' : 'Orange';
  });

  protected readonly activePlayerSwatch = computed(() =>
    this.activePlayerIndex() === 1
      ? '/img/lable_orange.svg'
      : '/img/label_blue.svg',
  );

  protected readonly boardDimensions = computed(
    () => BOARD_DIMENSIONS[this.selectedBoardSize()],
  );

  protected readonly playerScores = computed(() => {
    const s = this.scores();
    return this.selectedPlayer() === '2 players'
      ? [
          { name: 'Blue', score: s[0], color: 'blue' },
          { name: 'Orange', score: s[1], color: 'orange' },
        ]
      : [{ name: 'Blue', score: s[0], color: 'blue' }];
  });

  protected readonly cards = computed<CardItem[]>(() => {
    const totalCards = this.boardDimensions().columns * this.boardDimensions().rows;
    const pairCount = totalCards / 2;
    const sourceAssets = this.getThemeAssets(this.selectedTheme()).slice(0, pairCount);

    const deck = sourceAssets.flatMap((imageSrc, index) => {
      const label = this.toCardLabel(imageSrc);

      return [
      {
        id: `${index}-a`,
        designId: `design-${index}`,
        imageSrc,
        label,
      },
      {
        id: `${index}-b`,
        designId: `design-${index}`,
        imageSrc,
        label,
      },
      ];
    });

    return this.shuffle(deck);
  });

  protected readonly gameGridColumns = computed(() => `${this.boardDimensions().columns}`);
  protected readonly gameCardSize = computed(() =>
    this.selectedBoardSize() === '4 x 4' ? '120px' : '1fr',
  );
  protected readonly gameBoardGap = computed(() => '16px');
  protected readonly gameCardRadius = computed(() =>
    this.selectedBoardSize() === '4 x 4' ? '0' : '24px',
  );

  constructor() {
    this.document.body.setAttribute('data-theme', THEME_KEY_BY_OPTION[this.selectedTheme()]);

    effect(() => {
      const themeKey = THEME_KEY_BY_OPTION[this.selectedTheme()];
      this.document.body.setAttribute('data-theme', themeKey);
      this.resetBoard();
    });
  }

  protected goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  protected flipCard(card: CardItem): void {
    if (this.locked()) {
      return;
    }

    if (this.isCardFaceUp(card.id)) {
      return;
    }

    const nextFlipped = [...this.flippedCardIds(), card.id];
    this.flippedCardIds.set(nextFlipped);

    if (nextFlipped.length < 2) {
      return;
    }

    const [firstId, secondId] = nextFlipped;
    const currentCards = this.cards();
    const firstCard = currentCards.find((entry) => entry.id === firstId);
    const secondCard = currentCards.find((entry) => entry.id === secondId);

    if (!firstCard || !secondCard) {
      this.flippedCardIds.set([]);
      return;
    }

    if (firstCard.designId === secondCard.designId) {
      this.matchedCardIds.set([...this.matchedCardIds(), firstId, secondId]);
      this.flippedCardIds.set([]);
      const idx = this.activePlayerIndex();
      const updated = [...this.scores()];
      updated[idx] = (updated[idx] ?? 0) + 1;
      this.scores.set(updated);
      return;
    }

    this.locked.set(true);

    setTimeout(() => {
      this.flippedCardIds.set([]);
      this.locked.set(false);
      if (this.selectedPlayer() === '2 players') {
        this.activePlayerIndex.set(this.activePlayerIndex() === 0 ? 1 : 0);
      }
    }, 850);
  }

  protected handleCardKeydown(event: KeyboardEvent, card: CardItem): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    this.flipCard(card);
  }

  protected isCardFaceUp(cardId: string): boolean {
    return this.flippedCardIds().includes(cardId) || this.matchedCardIds().includes(cardId);
  }

  protected isCardMatched(cardId: string): boolean {
    return this.matchedCardIds().includes(cardId);
  }

  protected getCardAriaLabel(card: CardItem): string {
    if (this.isCardMatched(card.id)) {
      return `Matched card: ${card.label}`;
    }

    if (this.isCardFaceUp(card.id)) {
      return `Revealed card: ${card.label}`;
    }

    return 'Hidden memory card';
  }

  private resetBoard(): void {
    this.matchedCardIds.set([]);
    this.flippedCardIds.set([]);
    this.locked.set(false);
    this.scores.set([0, 0]);
    this.activePlayerIndex.set(0);
  }

  private getThemeAssets(theme: ThemeOption): string[] {
    if (theme === 'Coding vibes') {
      return VIBES_ASSETS;
    }

    return VIBES_ASSETS;
  }

  private shuffle<T>(items: T[]): T[] {
    const copy = [...items];

    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }

    return copy;
  }

  private toCardLabel(imageSrc: string): string {
    const fileName = imageSrc.split('/').pop() ?? 'card';
    return fileName.replace('.svg', '').toUpperCase();
  }

  private isThemeOption(value: string | null): value is ThemeOption {
    return (
      value === 'Coding vibes' ||
      value === 'Gaming' ||
      value === 'Da Projekts' ||
      value === 'Foods'
    );
  }

  private isPlayerOption(value: string | null): value is PlayerOption {
    return value === '1 player' || value === '2 players';
  }

  private isBoardSizeOption(value: string | null): value is BoardSizeOption {
    return value === '4 x 4' || value === '6 x 4' || value === '6 x 6';
  }
}
