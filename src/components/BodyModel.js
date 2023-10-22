import * as React from "react";
import {useState} from 'react';
import Model from "react-body-highlighter";

const buttonLinkClasses =
  "py-4 px-8 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600";

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
    <div className="p-5">
      <div className="body-model-container" >
        <div className="px-5">
          <Model data={modelData} onClick={handleClick} />
        </div>
        <div className="px-5">
          <Model
            type="posterior"
            data={modelData}
            highlightedColors={["#e65a5a", "#db2f2f"]}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}