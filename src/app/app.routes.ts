import { Routes } from '@angular/router';

import { Game } from './pages/game/game';
import { GameOver } from './pages/game-over/game-over';
import { Home } from './pages/home/home';
import { Settings } from './pages/settings/settings';
import { Winner } from './pages/winner/winner';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'game', component: Game },
  { path: 'game-over', component: GameOver },
  { path: 'winner', component: Winner },
  { path: 'settings', component: Settings },
];
