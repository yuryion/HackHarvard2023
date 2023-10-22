import * as React from "react";
import { useState } from 'react';
import Model from "react-body-highlighter";

export default function BodyModel({muscleSelected, setMuscleSelected}) {
  const [modelData, setModelData] = useState([
    {
      name: "",
      muscles: []
    },
    {
      name: "",
      muscles: []
    }
  ]);
  

  const handleClick = React.useCallback(({ muscle, data }) => {
    const newModelData = [{name: "Bench Press", muscles: [muscle]}, 
                          {name: "Bench Press", muscles: [muscle]}];

    setModelData(newModelData);
    setMuscleSelected(muscle);
  }, []);

  return (
    <div className="body-model-container">
      <Model data={modelData} onClick={handleClick} />
      <Model
        type="posterior"
        data={modelData}
        highlightedColors={["#e65a5a", "#db2f2f"]}
        onClick={handleClick}
      />
    </div>
  );
}