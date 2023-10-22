import {useState} from 'react'
import React from 'react';
import { apiCall } from "../Functions";
import BodyModel from "./BodyModel";
import { Spinner } from "@material-tailwind/react";
import Markdown from 'https://esm.sh/react-markdown@9'


function Rehabstretches() {
  const [muscleSelected, setMuscleSelected] = useState("");
  const [response, setResponse] = useState({ data: { answer: "" } });



  return (
    <>
      <button onClick={ function(){apiCall(response, setResponse, muscleSelected)}
        }>Send request</button>
        <Spinner />
        <h1 className="text-center">{muscleSelected}</h1>
        <Markdown>{response.data.answer}</Markdown>
        <BodyModel setMuscleSelected={setMuscleSelected}/>;
    </>
  );
}

export default Rehabstretches;