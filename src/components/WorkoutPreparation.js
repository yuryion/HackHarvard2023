import {useState} from 'react'
import React from 'react';
import { apiCall } from "../Functions";
import BodyModel from "./BodyModel";
import { Spinner } from "@material-tailwind/react";
import Markdown from 'https://esm.sh/react-markdown@9'
import "./Title.css"

const buttonLinkClasses =
  "py-4 px-8 bg-green-500 text-white rounded-md text-lg hover:bg-blue-600";


function WorkoutPreparation() {
  const [muscleSelected, setMuscleSelected] = useState("Choose affected muscle");
  const [response, setResponse] = useState({ data: { answer: " " } });



  return (
    <div style={{backgroundColor: '#263b77'}} className="flex flex-col items-center justify-center h-full">
      <div className="pt-5 flex flex-col items-center content-center" >
          {/* <Spinner /> */}
          <h1 className="text-center text-white text-base">{muscleSelected}</h1>
          <BodyModel setMuscleSelected={setMuscleSelected}/>
          <button className={buttonLinkClasses + "text-green-700"} onClick={ function(){apiCall(response, setResponse, muscleSelected)}
          }>Send request</button>
      </div>
      <div className="py-10 w-8/12 text-3xl text-white text-base">
        <Markdown>{response.data.answer}</Markdown>
        
      </div>
    </div>
  );
}

export default WorkoutPreparation;