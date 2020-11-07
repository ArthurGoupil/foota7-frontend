import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Dashboard,
  Event,
  FormatListNumbered,
  Equalizer,
} from '@material-ui/icons';

import {
  mainColor,
  mainDarkColor,
  normalSpace,
} from '../../styles/StylingConstants';

import NavLink from './NavLink';

const Nav = (): JSX.Element => {
  return (
    <>
      <NavContainer className='d-flex flex-column align-center'>
        <Link to='/'>
          <Logo src='/logo-sale-foota7.png' alt='Logo Salésienne de Paris' />
        </Link>
        <NavLink href='/test' text='Récap' icon={<Dashboard />} />
        <NavLink href='/test' text='Calendrier/Résultats' icon={<Event />} />
        <NavLink href='/test' text='Classement' icon={<FormatListNumbered />} />
        <NavLink href='/test' text='Statistiques' icon={<Equalizer />} />
      </NavContainer>
    </>
  );
};

export default Nav;

const NavContainer = styled.nav`
  width: 400px;
  height: 100vh;
  background: linear-gradient(to right bottom, ${mainDarkColor}, ${mainColor});
  padding: ${normalSpace} ${normalSpace};
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: ${normalSpace};
`;

const LinkContainer = styled.div`
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;
