import React from 'react';
import axios from 'axios';

import { ICalendarOfGames } from './types/FGSTDataTypes';

import './styles/reset.css';
import './styles/index.css';

const App = () => {
  const [data, setData] = React.useState<any>(null);

  const fetchFSGTWebsiteData = async () => {
    const response = await axios.get('http://localhost:3001/fgst-data');
    setData(response.data);
  };

  React.useEffect(() => {
    fetchFSGTWebsiteData();
  }, []);

  if (data) {
    console.log(data);
  }

  if (data) {
    return (
      <>
        <div>{data[13][3].resultOrLocation}</div>
      </>
    );
  } else {
    return <div>loading</div>;
  }
};

export default App;
