import { Link } from "react-router-dom";
import Title from "./Title";

const buttonLinkClasses =
  "py-4 px-8 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600"

export default function OpeningButtons() {
  return (
    <div className ="bg-black-400 flex-row">
      <Title/>
    <div className="flex flex-col items-center h-screen">
      <div className="mb-12 mt-20">
          
          <Link to="/QuestionsWorkout" className={buttonLinkClasses}>Workout Preparation</Link>
        
      </div>
      
      <div>
        <Link to = "/Rehab-stretches" className={buttonLinkClasses}>Rehab stretches</Link>
      </div>
    </div>
    </div>
  );
}
