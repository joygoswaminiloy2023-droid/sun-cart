'use client'
import Lottie from "lottie-react";
import Summervacation from "../../../public/animation/Summer vacation.json";
import Beach from "../../../public/animation/Beach Vacation.json";
import van from "../../../public/animation/Camper Van.json";
import water from "../../../public/animation/water drop.json";
import sun from "../../../public/animation/sunclouds.json";
import food from "../../../public/animation/Food animation.json";
import face from "../../../public/animation/acne remove.json";


const cards = [
  { title: "Beach Care", desc: "Protect your skin while enjoying the sun at the beach." },
  { title: "Hydration Boost", desc: "Keep your body hydrated throughout the day." },
  { title: "Sun Protection", desc: "Always apply sunscreen before going outside." },
  { title: "Healthy Diet", desc: "Eat fruits and cooling foods to beat heat." },
  { title: "Skin Refresh", desc: "Clean your face twice daily to avoid acne." },
  { title: "Travel Tips", desc: "Stay cool and comfortable during summer travel." }
];

const getAnimation = (title) => {
  if (title === "Beach Care") {
    return Beach;
  } else if (title === "Hydration Boost") {
    return water;
  } else if (title === "Sun Protection") {
    return sun;
  } 
  else if(title === "Travel Tips"){
return van;
  }
  else if(title === "Healthy Diet"){
return food;
  }
  else if(title === "Skin Refresh"){
return face;
  }
  
  else {
    return null;
  }
};
export default function SummerCare() {
  return (
    <div className="py-16  min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* glow effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 blur-3xl opacity-30 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-300 blur-3xl opacity-30 rounded-full"></div>

            <figure className="flex justify-center items-center pt-6">
              <Lottie  animationData={getAnimation(item.title)} loop={true} className="w-40" />
            </figure>

            <div className="p-6 text-gray-800">
              <h2 className="text-xl font-bold mb-2 text-sky-700">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-sky-400 to-yellow-400 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}