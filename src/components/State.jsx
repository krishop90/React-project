import { useState } from "react";


const State = () => {
    const [message , setMessage] = useState("Hello World !");
    return <div>
        <div className=" flex justify-center text-6xl font-bold text-blue-500">
            <h1>
                {message}
            </h1>
        </div>
        <div className="mt-6 space-x-4 flex justify-center items-center">
            <button className="bg-teal-700 text-white border-blue-600 font-semibold px-2 py-1.5 rounded-md" onClick={() => {setMessage("Oneee !!")}}>One</button>
            <button className="bg-purple-700 text-white border-blue-600 font-semibold px-2 py-1.5 rounded-md" onClick={() => {setMessage("Twooo !!")}}>Two</button>
            <button className="bg-yellow-500 text-white border-blue-600 font-semibold px-2 py-1.5 rounded-md" onClick={() => {setMessage("Threeee !!")}}>Three</button>
        </div>
    </div>
}

export default State;