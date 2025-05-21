// import React from 'react';
// import arru from '../assets/Images/arru.jpg';
// import aslam from '../assets/Images/aslam.jpg';
// import Ayyaan from '../assets/Images/Ayyaan.jpg';
// import safwan from '../assets/Images/safwan.jpg';
// import Aman from '../assets/Images/Aman.jpg';
// import Affu from '../assets/Images/Affu.jpg';
// import Aman from './assets/images/Aman.jpg'
import Aman from "../../assets/Images/Aman.jpg";
import Affu from "../../assets/Images/Affu.jpg";
import arru from "../../assets/Images/arru.jpg";
import aslam from "../../assets/Images/aslam.jpg";
import Ayyaan from "../../assets/Images/Ayyaan.jpg";
import safwan from "../../assets/Images/safwan.jpg";

function Member() {
//   // Log to check if imports resolve
//   console.log({ arru, aslam, Ayyaan, safwan, Aman, Affu });

  return (
    <div className="p-4 border rounded-[12px  ]">
      <h1 className="text-center text-2xl font-bold mb-4 border border-black rounded-[12px] bg-slate-200">PLAYERS OF TOTAL GAMING</h1>
      <div className="flex justify-center p-4 md:flex flex-wrap gap-4 bg-slate-200 rounded-lg">
        <div className="border border-black rounded-[12px] p-4 w-full md:w-[30%] flex flex-col items-center gap-4">
          <img className="h-auto w-[90%] rounded-lg transition-transform duration-300 hover:scale-105 " src={Aman} alt="Aman" />
          <h1 className="text-center text-xl font-semibold">Aman</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Know More...
          </button>
        </div>
        <div className="border border-black rounded-[12px] p-4 w-full md:w-[30%] flex flex-col items-center gap-4">
          <img className="h-auto w-[90%]  rounded-lg transition-transform duration-300 hover:scale-105" src={arru} alt="Arru" />
          <h1 className="text-center text-xl font-semibold">Arman Mafia</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Know More...
          </button>
        </div>
        <div className="border border-black rounded-[12px] p-4 w-full md:w-[30%] flex flex-col items-center gap-4">
          <img className="h-auto w-[90%]  rounded-lg transition-transform duration-300 hover:scale-105" src={aslam} alt="Aslam" />
          <h1 className="text-center text-xl font-semibold">Aslam VK</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Know More...
          </button>
        </div>
       
        <div className="border border-black rounded-[12px] p-4 w-full md:w-[30%] flex flex-col items-center gap-4">
               <img className="h-auto w-[90%]  rounded-lg transition-transform duration-300 hover:scale-105" src={Ayyaan} alt="Ayyaan" />
          <h1 className="text-center text-xl font-semibold">Ayyan Messi</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Know More...
          </button>
        </div>
        <div className="border border-black rounded-[12px] p-4 w-full md:w-[30%] flex flex-col items-center gap-4">
         <img className="h-auto w-[90%] rounded-lg transition-transform duration-300 hover:scale-105" src={safwan} alt="Safwan" /> 
          <h1 className="text-center text-xl font-semibold">Safwan SUIII</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Know More...
          </button>
        </div>
          <div className="border border-black rounded-[12px] p-4 w-full md:w-[30%] flex flex-col items-center gap-4">
            <img className="h-auto w-[90%] rounded-lg transition-transform duration-300 hover:scale-105" src={Affu} alt="Aman" />
            <h1 className="text-center text-xl font-semibold">Afran KCR</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Know More...
            </button>
          </div>
      </div>


        
        
   
        
      </div>
  
  );
}

export default Member;