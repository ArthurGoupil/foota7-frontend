import {
  IGamesCalendar,
  IRankingTable,
  INextGameData,
} from '../types/FGSTDataTypes';
import { getSimplifiedDate, areDateEqual } from '../helpers/DateHelpers';

const getRankingOfTeam = (
  teamName: string,
  rankingTable: IRankingTable
): number | undefined => {
  for (let rankingLine of rankingTable) {
    if (rankingLine.teamName === teamName) {
      return rankingLine.teamPosition;
    }
  }
};

export const getNextGame = (
  gamesCalendar: IGamesCalendar,
  rankingTable: IRankingTable
): INextGameData => {
  const today = new Date();
  for (let gameDay of gamesCalendar) {
    for (let game of gameDay) {
      const date = game.date;
      if (today < new Date(date) || areDateEqual(today, new Date(date))) {
        if (game.firstTeam === 'LA SALESIENNE DE PARIS') {
          return {
            date: getSimplifiedDate(new Date(date), '/'),
            opponent: game.secondTeam,
            opponentRanking: getRankingOfTeam(game.secondTeam, rankingTable),
            location: game.resultOrLocation,
          };
        } else if (game.secondTeam === 'LA SALESIENNE DE PARIS') {
          return {
            date: getSimplifiedDate(new Date(date), '/'),
            opponent: game.firstTeam,
            opponentRanking: getRankingOfTeam(game.secondTeam, rankingTable),
            location: game.resultOrLocation,
          };
        }
      }
    }
  }

  return {
    date: 'Pas de prochain match',
    opponent: '',
    opponentRanking: undefined,
    location: '',
  };
};

export const getRankingExponent = (ranking: number | undefined): string => {
  if (ranking === 1) {
    return 'er';
  } else {
    return 'ème';
  }
};
