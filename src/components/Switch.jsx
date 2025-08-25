import { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`h-full w-full flex items-center justify-center transition-colors duration-500 
        ${isOn ? "bg-yellow-100" : "bg-gray-500"}`}
    >
      <div
        className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 
          ${isOn ? "bg-green-500" : "bg-gray-300"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${isOn ? "translate-x-10" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
