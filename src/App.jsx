import React from "react";
import Content from './components/Content.jsx';
import './App.css';
import { IoLogoJavascript } from "react-icons/io5"; 
import Orbiting from "./components/orbiting.jsx";

const HomePage = () => {
  return (
    <div className="font-sans text-[#1E1E1E] bg-[#f7eae8]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-[#f7eae8]">
  <div className="text-2xl font-bold text-[#000000]">
     <img
      src="/Screenshot 2025-04-22 173954.png"
      alt="Hero"
      className="w-[200px] md:w-[250px]"
    />
     
  </div>
  <ul className="hidden md:flex space-x-10 text-sm font-medium">
    <li className="nav-item hover:text-[#EC5C2A] cursor-pointer">Home</li>
    <li className="nav-item hover:text-[#EC5C2A] cursor-pointer">About Us</li>
    <li className="nav-item hover:text-[#EC5C2A] cursor-pointer">Training</li>
    <li className="nav-item hover:text-[#EC5C2A] cursor-pointer">Placement</li>
    <li className="nav-item hover:text-[#EC5C2A] cursor-pointer">Contact Us</li>
  </ul>
  <button className="bg-[#EC5C2A] text-white px-4 py-2 rounded-md text-sm font-semibold">
    Login
  </button>
</nav>


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center p-2 md:px-24 bg-[#f7eae8]">
        <div className="max-w-xl space-y-4 space-x-2">
          <Content />
        </div>
        <div className="mt-8 md:mt-0">
          {/* <img
            src="/Screenshot 2025-04-22 175658.png"
            alt="Hero"
            className="w-[300px] md:w-[400px]"
          /> */}
          <Orbiting />
        </div>
      </section>

      {/* Uniqueness */}
      <section className="bg-[#f7eae8] px-10 py-3 mt-10">
        <section className="bg-[#f7eae8] px-10 py-3">
          <div className="relative flex items-center mb-8">
            {/* Circle Stack */}
            <div className="relative w-20 h-20 rounded-full bg-[#DE623160] flex items-center justify-center">
              <div className="absolute w-14 h-14 bg-[#EC5C2A40] rounded-full"></div>
              <div className="absolute w-8 h-8 bg-[#EC5C2A80] rounded-full"></div>
            </div>

            {/* Our Model Text */}
            <h1 className="text-2xl md:text-2.5xl font-bold absolute left-[31px] top-1/2 -translate-y-1/2">
              Uniqueness About Our Program
            </h1>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-x-10 gap-y-8 md:gap-10rem gap-20 max-w-6xl mx-auto text-sm items-center">
          {/* 🖼️ Left Side - You can place your image or figure here */}
          <div className="flex justify-center px-20">
            <img
              src="/Screenshot 2025-04-22 181745.png"
              alt="Unique Program Illustration"
              className="w-[300px] md:w-[600px]"
            />
          </div>

          {/* ✅ Right Side - List */}
          <ul className="space-y-4  px-5 list-disc list-inside marker:text-[#13A586] marker:text-lg ">
            <li className="font-medium">
              Industry Aligned Upskilling For Career Acceleration
            </li>
            <li className="font-medium">
              Actionable Feedback That Fuels Continuous Growth
            </li>
            <li className="font-medium">
              Expert-led Internships with Real World Projects
            </li>
            <li className="font-medium">
              Simplifying Theory Through Practical Execution
            </li>
            <li className="font-medium">
              Structured & Shortest Learning Journey
            </li>
            <li className="font-medium">
              One Dedicated Doubt Session With Dedicated Mentors
            </li>
            <li className="font-medium">
              Immersive Hands-On Training with Live Projects
            </li>
          </ul>
        </div>
      </section>

      {/* Our Model */}
      <section className="bg-[#f7eae8] px-10 py-10 mt-10 border-b-2 border-gray-300">
        <section className="bg-[#f7eae8] px-10 py-3">
          <div className="relative flex items-center mb-6">
            {/* Circle Stack */}
            <div className="relative w-20 h-20 rounded-full bg-[#DE623160] flex items-center justify-center">
              <div className="absolute w-14 h-14 bg-[#EC5C2A40] rounded-full"></div>
              <div className="absolute w-8 h-8 bg-[#EC5C2A80] rounded-full"></div>
            </div>

            {/* Our Model Text */}
            <h1 className="text-2xl md:text-2.5xl font-bold absolute left-[31px] top-1/2 -translate-y-1/2">
              Our Model
            </h1>
          </div>
        </section>
        <div className="flex justify-center">
          <p className="text-sm max-w-4xl mb-10 font-medium px-5 leading-loose text-center mx-auto">
            At{" "}
            <span className="font-bold text-[#EC5C2A] leading-loose">
              Exskilence
            </span>
            , we follow a power model that blends online classes, hands-on
            workshops, and live mentorship. Learners sharpen their skills
            through feedback-enabled coaching, real-time tasks, and real-time
            challenges. The quality curriculum is career-focused and is strongly
            structured like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center px-4">
          {[
            "Online Classes",
            "Real-time Problem Solving",
            "Internship Challenges",
            "Hands-On Workshops",
            "Coding Test",
          ].map((item) => (
            <div
              key={item}
              className="w-full max-w-[320px] bg-[#DE623130] rounded-xl p-4 shadow-md hover:bg-[#DE623150]"
            >
              <div className="bg-[#DE623120] rounded-lg py-8 px-4 text-center font-medium text-sm hover:bg-[#DE623130]">
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-body-gradient px-4 sm:px-6 py-10 border-b-2 border-gray-300">
  <section className="px-4 md:px-10 py-0">
    <div className="relative flex items-center mb-4">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#DE623160] flex items-center justify-center">
        <div className="absolute w-10 h-10 sm:w-14 sm:h-14 bg-[#EC5C2A40] rounded-full"></div>
        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-[#EC5C2A80] rounded-full"></div>
      </div>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold absolute left-[28px] sm:left-[31px] top-1/2 -translate-y-1/2">
        Testimonials
      </h1>
    </div>
  </section>

  <div className="bg-orange p-4 sm:p-6 rounded-md">
    <h3 className="font-bold mb-8 sm:mb-10 text-center font-medium">
      Our Best Placed Students
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
      {["Priya Kadian", "Priya Yadav", "Priya Varma", "Rakesh Nair"].map(
        (name, idx) => (
          <div
            key={idx}
            className="bg-white w-full max-w-[280px] p-6 rounded-md flex flex-col items-center shadow"
          >
            <div className="w-full max-w-[176px] h-[96px] bg-gray-200 rounded flex items-center justify-center mb-2">
              ▶
            </div>
            <p className="text-sm font-medium text-center">{name}</p>
            <p className="text-xs text-gray-500 text-center">
              Data Analyst, Deloitte
            </p>
          </div>
        )
      )}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className=" bg-white px-6 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-bold text-[#13A586] text-3xl mb-2 ml-20">Exskilence</h4>
          <p className="ml-20 font-bold">Opportunity is Everyone's Right</p>
          <div className="flex space-x-3 mt-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full ml-20 mt-3 "></span>
            <span className="w-6 h-6 bg-gray-300 rounded-full ml-20 mt-3 "></span>
            <span className="w-6 h-6 bg-gray-300 rounded-full ml-20 mt-3"></span>
            <span className="w-6 h-6 bg-gray-300 rounded-full ml-20 mt-3"></span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-[#EC5C2A] text-xl">Links</h4>
          <ul className="space-y-2">
            <li className="text-xs">Home</li>
            <li className="text-xs">About Us</li>
            <li className="text-xs">Training</li>
            <li className="text-xs">Resources</li>
            <li className="text-xs">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-[#EC5C2A] text-xl">Address</h4>
          <p className=" text-xs leading-medium w-[200px] ">
          <i className="fas fa-map-marker-alt text-[#EC5C2A]"></i>
          Exskilence Upskilling LLP, 811, 5th cross, 1st block, HRBR layout,
          Banglore-560043
            <br />
            <br />
            Call : +91-8088064988
            <br />
            <br />
            hrexskilence@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
