import React from 'react';
import "./index.scss";
import styled from 'styled-components';

const Lamp = ({active}) => {
  return (
    <div className="lamp">
      <div className="lamp_line"></div>
      <LampCircle active={active} className="lamp_circle">
        <div className="arrow arrow_1"></div>
        <div className="arrow arrow_2"></div>
        <div className="arrow arrow_3"></div>
        <div className="arrow arrow_4"></div>
        <div className="arrow arrow_5"></div>
      </LampCircle>
    </div>
  );
}

const LampCircle = styled.div`
  background-color: ${({active}) => active ? 'yellow' : 'transparent'};
`;

export default Lamp;