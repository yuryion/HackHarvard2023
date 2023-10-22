// RehabStretches.js
import React from 'react';
import { Link } from "react-router-dom";
import {useState} from 'react';



const buttonLinkClasses =
  "py-2 px-4 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600"

export default function QuestionsWorkout() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [meds, setMeds] = useState("");


  function handleAge(e) {
    setAge(e.target.value);
    console.log(age)
  }

  function handleWeight(e) {
    setWeight(e.target.value);
    console.log(weight)
  }
  function handleMeds(e) {
    setMeds(e.target.value);
    console.log(meds)
  }



  return (
    <div className ="bg-slate-400">
     <form className="max-w-md mx-auto mt-6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputField">
          How old are you?
        </label>
        <input
          type="text"
          id="inputField"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter text"
          onChange={handleAge}
         
          
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputField">
          How much do you weigh?
        </label>
        <input
          type="text"
          id="inputField"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter text"
          onChange={handleWeight}
         
        
          
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputField">
          Do you take any medication?
        </label>
        <input
          type="text"
          id="inputField"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter text"
          onChange={handleMeds}
        
      
        />
      </div>
    </form>


      <div className='py-10'>
        {meds!=''&&age!=''&&weight!=''&&
          (<Link to="/Workout-preparation" className={buttonLinkClasses} >Next</Link>)
        } 
        <Link to="/" className={buttonLinkClasses} >Back</Link>
      </div>

    </div>
  );
}










{/*<div >
          <div className ='pb-10'>
          <p className="text-lg font-semibold mb-4">What is your age?</p>
          <label className = 'px-5'>
            <input type="radio" name="age" className="mr-2 form-radio" checked={question1 = "18 and under"} />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">18 and under</span>
          </label>
          <label className = 'px-5'>
            <input type="radio" name="age" className="mr-2 form-radio " />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">Between 18 and 30</span>
          </label>
          <label className = 'px-5'>
            <input type="radio" name="age" className="mr-2 form-radio " />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">30 and up</span>
          </label>
          </div>

          <div className ='pb-10'>
          <p className="text-lg font-semibold mb-4">What is your weight?</p>
          <label className = 'px-5'>
            <input type="radio" name="weight" className="mr-2 form-radio" />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">150 lbs and under</span>
          </label>
          <label className = 'px-5'>
            <input type="radio" name="weight" className="mr-2 form-radio " />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">150 to 200 lbs </span>
          </label>
          <label className = 'px-5'>
            <input type="radio" name="weight" className="mr-2 form-radio " />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">201+lbs</span>
          </label>
          </div>

          <div className ='pb-10'>
          <p className="text-lg font-semibold mb-4">Do you take any medication?</p>
          <label className = 'px-5'>
            <input type="radio" name="medication" className="mr-2 form-radio" />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">Yes, I take medication</span>
          </label>
          <label className = 'px-5'>
            <input type="radio" name="medication" className="mr-2 form-radio " />
            <span className="text-gray-700 transition duration-300 hover:text-blue-500">No, I do not take medication</span>
          </label>
          </div>
          
        </div>*/}