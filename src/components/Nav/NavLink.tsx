import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { smallSpace } from '../../styles/StylingConstants';
import { INavLinkProps } from '../../types/NavLinkTypes';

const NavLink = ({ href, text, icon }: INavLinkProps): JSX.Element => {
  return (
    <LinkContainer>
      <Link to={href} className='d-flex'>
        <IconContainer className='icon d-flex align-center'>
          {icon}
        </IconContainer>
        {text}
      </Link>
    </LinkContainer>
  );
};

export default NavLink;

const LinkContainer = styled.div`
  margin-bottom: ${smallSpace};
  text-align: left;
  width: 100%;

  & a {
    color: white;
  }
  & a:visited {
    color: white;
  }
`;

const IconContainer = styled.span`
  margin-right: calc(${smallSpace});
  transition: transform 0.5s;

  ${LinkContainer}:hover & {
    transform: rotate(360deg);
  }
`;
