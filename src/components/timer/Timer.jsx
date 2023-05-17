import {React, useState, useEffect} from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    
      return () => {
        clearInterval(interval)
      }
    }, [])
    
    return(
        <div>
            <h2>Timer</h2>
            <p>Basic useEffect use</p>
            <p>Current time: {seconds} seconds</p>
        </div>
    );
}

export default Timer;