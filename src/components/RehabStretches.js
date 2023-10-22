// RehabStretches.js
import React from 'react';
import { Link } from "react-router-dom";



  const questions =
  "p-10"
  const buttonLinkClasses =
  "py-2 px-4 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600"

export default function RehabStretches() {
  return (
    <div className='text-gray-182-189-195'>
      <h1>This is going to be rehab model</h1>

    
    
    
      <div className = {questions}>
        <Link to="/" className={buttonLinkClasses} >Back</Link>
      </div>
    
    
    </div>

    
  );
}
