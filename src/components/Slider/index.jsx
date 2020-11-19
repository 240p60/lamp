import React from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import styled from 'styled-components';
import './index.scss';

const SliderComponent = ({ value, setValue, active, position, title, step, min, max }) => {
  const style = {
    display: 'inline-block',
    height: 300,
    position: 'absolute',
    top: '50%',
    marginTop: '-150px',
  };

  position === 'left' ? style.left = 0 : style.right = 0;
  
  return (
    <div style={style}>
      <Title position={position}>{title}</Title>
      <Slider vertical disabled={!active} min={min} max={max} value={value} step={step} onChange={(value) => setValue(value)} />
    </div>
  )
}

const Title = styled.div`
  position: absolute;
  ${({position}) => position === 'left' ? "left: -115px" : "right: -115px"};
  top: 50%;
  font-size: 36px;
  line-height: 40px;
  margin-top: -20px;
  color: #fff;
  text-transform: uppercase;
  transform: rotate(90deg);
`;

export default SliderComponent;