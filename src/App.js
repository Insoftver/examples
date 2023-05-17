import {React, useState} from 'react';
import Counter from './components/counter/Counter'
import Timer from './components/timer/Timer'
import TextInput from './components/textInput/TextInput'
import ProvidedComponent from './components/themeProvider/ProvidedComponent'
import {ThemeProvider} from './components/themeProvider/ThemeProvider';
import Calculation from './components/calculation/Calculation'
import Button from './components/button/Button';
import UsePokeApi from './components/usePokeApi/UsePokeApi';

function App() {
  const [showTimer, setShowTimer] = useState(true)
  const toggleTimer = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer)
  }
  
  const [value, setValue] = useState(0)
  const handleChange = (event) => {
    setValue(Number(event.target.value))
  }

  const {list, loading, error} = UsePokeApi()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error: {error}</p>
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
      <br />--<br />

      <Button />
      <br />--<br />

      <h2>PokeApi</h2>
      <p>Basic cusom hook use</p>
      
      <ul>
        {
          list.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
