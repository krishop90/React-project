import { useState } from "react";

const Widget3 = () => {
    const [showIcon , setShowIcon] = useState(false);

    return <div>
        <div className="bg-green-100 border border-green-300 p-4 rounded-lg m-4 flex flex-col items-center">
            {showIcon && <i className="fa-solid fa-poo text-fuchsia-500 text-3xl mb-4"></i>}
            <button 
                className="px-4 py-2 bg-fuchsia-500 text-white rounded-full"
                onClick={() => setShowIcon(!showIcon)}
            >Click me</button>
        </div>
    </div>
}

export default Widget3;