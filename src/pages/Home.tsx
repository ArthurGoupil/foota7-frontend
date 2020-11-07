import React from 'react';
import axios from 'axios';

import {
  IFGSTData,
  IGamesCalendar,
  IRankingTable,
} from '../types/FGSTDataTypes';

import { getNextGame } from '../helpers/GamesHelpers';
import NextGameBox from '../components/Home/NextGameBox';
import RankingDisplay from '../components/Home/RankingDisplay';

const Home = (props: any): JSX.Element => {
  const [
    gamesCalendar,
    setgamesCalendar,
  ] = React.useState<IGamesCalendar | null>(null);
  const [rankingTable, setRankingtable] = React.useState<IRankingTable | null>(
    null
  );

  const fetchFSGTWebsiteData = async () => {
    const response = await axios.get<IFGSTData>(
      'http://localhost:3001/fsgt-games-calendar-and-ranking'
    );
    // const response = await axios.get<IFGSTData>('/offline-data.json');
    setgamesCalendar(response.data.gamesCalendar);
    setRankingtable(response.data.rankingTable);
  };

  React.useEffect(() => {
    fetchFSGTWebsiteData();
  }, []);

  if (gamesCalendar && rankingTable) {
    const nextGame = getNextGame(gamesCalendar, rankingTable);
    return (
      <>
        <NextGameBox nextGameData={nextGame} />
        <RankingDisplay />
      </>
    );
  } else {
    return <div className='d-flex align-center justify-center'>loading</div>;
  }
};

export default Home;
