import React from 'react';
import { Lamp, Slider } from './components';
import "./index.scss";

function App() {
  const [active, setActive] = React.useState(false);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    active ? setValue(100) : setValue(0);
  }, [active])

  return (
    <div className="App">
      <Lamp active={active} value={value} />
      <Slider value={value} setValue={setValue} active={active} />
      <button type="button" className={`btn ${active ? 'active' : 'disabled'}`} onClick={() => setActive(!active)}>
        <span>{active ? 'TURN OFF' : 'TURN ON'}</span>
      </button>
    </div>
  );
}

export default App;
