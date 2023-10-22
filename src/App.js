import BodyModel from "./components/BodyModel";
import { useState } from 'react';
import { apiCall } from './Functions.js'
import { Spinner } from "@material-tailwind/react";
import Markdown from 'https://esm.sh/react-markdown@9'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpeningButtons from './components/OpeningButtons';
import RehabStretches from './components/RehabStretches';
import WorkoutPreparation from './components/WorkoutPreparation';
import QuestionsWorkout from './components/QuestionsWorkout';
import QuestionsRehab from "./components/QuestionsRehab";



function App() {
  const [muscleSelected, setMuscleSelected] = useState("");
  const [response, setResponse] = useState({data: {answer: ""}});

  return (
    <>
    <Router>
      
      <Routes>
        <Route path = "/" element = {<OpeningButtons/>}/>
        <Route path = "/Workout-preparation" element = {<WorkoutPreparation setMuscleSelected={setMuscleSelected}/>}/>
        <Route path = "/Rehabstretches" element = {<RehabStretches/>}/>
        <Route path = "/QuestionsWorkout" element = {<QuestionsWorkout/>}/>
        <Route path = "/QuestionsRehab" element = {<QuestionsRehab/>}/>
        
      </Routes>
    </Router>
    <button onClick={ function(){apiCall(response, setResponse, muscleSelected)}
    }>Send request</button>
    <Spinner />
    <h1 className="text-center">{muscleSelected}</h1>
    <Markdown>{response.data.answer}</Markdown>
    {/* <h2>{response.data.answer}</h2> */}
    
    </>
  );
}

export default App;
