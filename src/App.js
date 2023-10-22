import BodyModel from "./BodyModel";
import { useState } from 'react';
import apiCall from './Functions.js'


function App() {
  const [muscleSelected, setMuscleSelected] = useState("");
  const [response, setResponse] = useState("");

  return (
    <>
    <button onClick={ function(){
      const callback = apiCall(muscleSelected);
      setResponse(callback)
    }
      

    }>Send request</button>
    <h1 className="text-center">{muscleSelected}</h1>
    <h2>{response}</h2>
    <BodyModel muscleSelected={muscleSelected} setMuscleSelected={setMuscleSelected}/>
    </>
  );
}

export default App;
