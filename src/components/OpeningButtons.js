import { Link } from "react-router-dom";
import Title from "./Title";
import './Title.css';

const buttonLinkClasses =
  "py-4 px-8 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600";

export default function OpeningButtons() {
  return (
    <>
      <div className="main">
        <a href="/"><img src="bonsai.svg" className="logo"/></a>
        <div className="header-element">About</div>
        <div className="header-element">For Buisness</div>
        <div className="header-element">Plans and Pricing</div>
        <div className="header-element">Support</div>
        <div className="divider"></div>
      </div>
    <div className="tagline important gradient-text">
      Happy Muscles
      <br />
      <span className="below-tagline">AI-Powered Bliss for Your Body</span>
    </div>
    {/* make a scrolling down button arrow animation here  */}
    <div className="button-container">
      <div className="button">
        <div class="scroll-down2"></div>
      </div>
    </div>

    
      <div className="min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center mx-auto w-100">
          <div className="md:w-1/2 text-center md:text-right px-4 md:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Workout Image" className="w-full h-64 object-cover rounded-t-lg" />
              <div class="p-4">
                <Link to="/QuestionsWorkout" className={buttonLinkClasses + " block text-xl font-bold buttonn"}>
                  <div className="flex items-center justify-center mb-2 buttonn">
                    Explore Workout Preparation
                  </div>
                </Link>
                <br></br>
                <p className="text-gray-600">
                  Get ready for your next gym session with our expert advice.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left px-4 md:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Rehab Stretches Image" className="w-full h-64 object-cover rounded-t-lg" />
              <div class="p-4 ">
                <Link to="/QuestionsRehab" className={buttonLinkClasses + " block text-xl font-bold buttonn"}>
                  <div className="flex items-center justify-center mb-2 buttonn">
                    Discover Rehab Stretches
                  </div>
                </Link>
                <br></br>
                <p className="text-gray-600">
                  Speed up your recovery and reduce muscle pain with our recommended stretches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      </>
  );
}