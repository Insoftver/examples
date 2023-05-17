import {React, useState} from 'react';
import Counter from './components/counter/Counter'
import Timer from './components/timer/Timer'
import TextInput from './components/textInput/TextInput'
import ProvidedComponent from './components/themeProvider/ProvidedComponent'
import {ThemeProvider} from './components/themeProvider/ThemeProvider';
import Calculation from './components/calculation/Calculation'

function App() {
  const [showTimer, setShowTimer] = useState(true)
  const toggleTimer = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer)
  }
  
  const [value, setValue] = useState(0)
  const handleChange = (event) => {
    setValue(Number(event.target.value))
  }


  return (
    <div>
      <Counter />
      <br />--<br />

      {showTimer && <Timer />}
      <button onClick={toggleTimer}>Show/Hide timer</button>
      <br />--<br />

      <TextInput />
      <br />--<br />

      <ThemeProvider>
        <ProvidedComponent />
      </ThemeProvider>
      <br />--<br />

      <h2>Calculation</h2>
      <p>Basic useMemo use</p>
      <input type="number" value={value} onChange={handleChange} />
      <Calculation number={value} /> 
    </div>
  );
}

export default App;
