export interface IGameInformation {
  date: Date;
  firstTeam: string;
  secondTeam: string;
  resultOrLocation: string;
}

export type IGamesCalendar = Array<Array<IGameInformation>>;

export interface IRankingTableLine {
  teamPosition: number;
  teamName: string;
  points: number;
  numberOfGames: number;
  wonGames: number;
  drawGames: number;
  lostGames: number;
  scoredGoals: number;
  concededGoals: number;
}

export type IRankingTable = Array<IRankingTableLine>;

export interface IFGSTData {
  gamesCalendar: IGamesCalendar;
  rankingTable: Array<IRankingTableLine>;
}

export interface INextGameData {
  date: string;
  opponent: string;
  opponentRanking: number | undefined;
  location: string;
}
