import { gameNames } from './game-data';

export const routes = {
  home: '/',
  game: '/game',
  shop: '/shop',
};

export function getGameRoute(id: keyof typeof gameNames) {
  return `${routes.game}/${gameNames[id]}`;
}
