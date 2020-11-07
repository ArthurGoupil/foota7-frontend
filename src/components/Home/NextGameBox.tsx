import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Event } from '@material-ui/icons';

import { getRankingExponent } from '../../helpers/GamesHelpers';
import {
  greenSolidShadow,
  mainColor,
  mainDarkColor,
  miniRadius,
  normalSpace,
  radius,
  smallSpace,
} from '../../styles/StylingConstants';

import { INextGameData } from '../../types/FGSTDataTypes';

const NextGameBox = ({
  nextGameData,
}: {
  nextGameData: INextGameData;
}): JSX.Element => {
  return (
    <NextGameContainer className='d-flex flex-column align-center'>
      <NextGameTitle>Prochain match</NextGameTitle>
      <OpponentAndRankingContainer>
        <Opponent>{nextGameData.opponent}</Opponent>{' '}
        <Ranking>
          ({nextGameData.opponentRanking}
          <sup>{getRankingExponent(nextGameData.opponentRanking)}</sup> du
          classement)
        </Ranking>
      </OpponentAndRankingContainer>
      <DateAndLocation className='d-flex align-center'>
        {nextGameData.date} - {nextGameData.location}
      </DateAndLocation>
      <LinkContainer className='d-flex'>
        <IconContainer className='d-flex align-center'>
          <Event fontSize='small' />
        </IconContainer>
        <Link to='/'>Voir le calendrier/résultats</Link>
      </LinkContainer>
    </NextGameContainer>
  );
};

export default NextGameBox;

const NextGameContainer = styled.div`
  width: 100%;
  background-image: url('/banner-pteasnieres.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${normalSpace};
  border-radius: ${radius};
  color: white;
  position: relative;
`;

const NextGameTitle = styled.h1`
  margin-bottom: calc(${smallSpace});
  color: white;
  text-shadow: 3px 3px 0 ${mainColor};
  text-align: center;
`;

const OpponentAndRankingContainer = styled.div`
  color: ${mainColor};
  margin-bottom: calc(${smallSpace});
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: ${miniRadius};
  padding: 8px 10px;
  text-align: center;
  transform-style: preserve-3d;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 5px;
    bottom: -5px;
    border-radius: ${miniRadius};
    background: linear-gradient(to left, ${mainDarkColor}, ${mainColor});
    transform: translateZ(-1px);
    z-index: 1;
  }
`;

const Opponent = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Ranking = styled.span`
  font-size: 14px;
`;

const DateAndLocation = styled.div`
  font-style: italic;
  margin-bottom: ${normalSpace};
`;

const LinkContainer = styled.div`
  font-style: italic;
  font-size: 15px;
  color: ${mainColor};

  &:hover {
    text-decoration: underline;
  }
`;

const IconContainer = styled.span`
  margin-right: 5px;
`;
