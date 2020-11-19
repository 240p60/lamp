import React from 'react';
import { Lamp, Slider } from './components';
import "./index.scss";

function App() {
  const [active, setActive] = React.useState(false);
  const [intenseValue, setIntenseValue] = React.useState(0);
  const [warmthValue, setWarmthValue] = React.useState(1);

  React.useEffect(() => {
    if (active) {
      setIntenseValue(100);
      setWarmthValue(1);
    } else {
      setIntenseValue(0);
      setWarmthValue(1);
    }
  }, [active])

  return (
    <div className="App">
      <Lamp active={active} warmthValue={warmthValue} intenseValue={intenseValue} />
      <Slider title="Warmth" min={1} max={15} step={1} position="left" value={warmthValue} setValue={setWarmthValue} active={active} />
      <Slider title="Intensity" min={0} max={100} step={10} position="right" value={intenseValue} setValue={setIntenseValue} active={active} />
      <button type="button" className={`btn ${active ? 'active' : 'disabled'}`} onClick={() => setActive(!active)}>
        <span>{active ? 'TURN OFF' : 'TURN ON'}</span>
      </button>
    </div>
  );
}

export default App;
