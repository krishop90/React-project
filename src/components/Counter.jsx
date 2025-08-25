import { useState } from "react";   


const Counter = () => {
    const [count , setCount] = useState(0);

    return <div className="flex flex-row px-6 py-2">
        <button 
            className="border border-black mr-6 p-4 rounded-md flex items-center bg-red-400"
            onClick={() => setCount(count - 1)}
        >
            <i class="fa-solid fa-minus text-white"></i>
        </button>
        <div className="flex items-center font-bold text-2xl">
            {count}
        </div>
        <button 
            className="border border-black ml-6 p-4 rounded-md flex items-center bg-green-400"
            onClick={() => setCount(count + 1)  }
        >
            <i class="fa-solid fa-plus text-white"></i>
        </button>
    </div>
}
export default Counter;