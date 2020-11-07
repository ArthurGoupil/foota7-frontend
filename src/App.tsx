import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { normalSpace } from './styles/StylingConstants';

import './styles/reset.css';
import './styles/index.css';

import Nav from './components/Nav/';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Root className='d-flex'>
        <Nav />
        <MainContainer className='d-flex flex-column align-center'>
          <Main className='d-flex justify-center'>
            <Switch>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Main>
        </MainContainer>
      </Root>
    </Router>
  );
};

export default App;

const Root = styled.div`
  background-color: #f5f5f5;
`;

const MainContainer = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
  padding: ${normalSpace};
`;
