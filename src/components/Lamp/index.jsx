import React from 'react';
import LampOff from './bulb-off.png';
import LampOn from './bulb-on.png';
import styled from 'styled-components';

const Lamp = ({ active, intenseValue, warmthValue }) => {
  return (
    <>
      <LampDisabled id="bulb-off" alt="bulb-off" src={LampOff} />
      {active && <LampActive warmthValue={warmthValue} intenseValue={intenseValue} alt="bulb-on" src={LampOn} /> }
    </>
  );
}

const LampActive = styled.img`
  margin-top: -50px;
  height: 450px;
  width: 100%;
  position: absolute;
  opacity: ${({intenseValue}) => intenseValue / 100};
  transition: .2s linear;
  -webkit-filter: ${({warmthValue}) => `saturate(${warmthValue})`};
  filter: ${({warmthValue}) => `saturate(${warmthValue})`};
`;

const LampDisabled = styled.img`
  margin-top: -50px;
  height: 450px;
  width: 100%;
  position: absolute;
`;

export default Lamp;