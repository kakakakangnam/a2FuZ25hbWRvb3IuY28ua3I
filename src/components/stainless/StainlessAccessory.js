import React from 'react';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import Banner from '../common/Banner';
import * as variable from '../common/Variables';

const StainlessAccessoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  margin-top: 2rem;
  max-width: 90%;
  height: auto;
`;

const NavWrapper = styled.div`
  width: 90%;
  margin: 0 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StainlessNav = styled(NavLink)`
  padding: 1rem;
  border-bottom: 1px solid gray;
  &:hover {
    color: blue;
    margin-bottom: -1px;
    border-bottom: 2px solid blue;
  }
`;

const StainlessAccessory = ({ match }) => {
  const kind = match.params.kind;
  return (
    <StainlessAccessoryBlock>
      <Banner />
      <NavWrapper>
        {Object.keys(variable.stainless).map((e, index) => (
            <StainlessNav activeStyle={{"fontWeight":"bold"}} to={'/stainless/' + e} key={index}>{variable.stainless[e]}</StainlessNav>
          ))}
      </NavWrapper>
      <ImageWrapper src={"/images/stainless/" + kind + ".jpg"} />
    </StainlessAccessoryBlock>
  );
};

export default withRouter(StainlessAccessory);