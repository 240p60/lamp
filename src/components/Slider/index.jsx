import React from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import './index.scss';

const SliderComponent = ({ value, setValue, active }) => {
  const style = {
    display: 'inline-block',
    height: 300,
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: '-150px',
  };
  
  return (
    <div style={style}>
      <Slider vertical disabled={!active} value={value} step={10} onChange={(value) => setValue(value)} />
    </div>
  )
}

export default SliderComponent;