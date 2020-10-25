export interface IGameInformation {
  date: string;
  firstTeam: string;
  secondTeam: string;
  resultOrLocation: string;
}

export interface ICalendarOfGames {
  [index: number]: Array<IGameInformation>;
}
