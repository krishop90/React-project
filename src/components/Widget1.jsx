import { useState } from "react";

const Widget = () => {
    const [showIcon , setShowIcon] = useState(false);

    return <div>
        <div className="bg-green-100 border border-green-300 p-4 rounded-lg m-4 flex flex-col items-center">
            {showIcon ? <i className="fa-solid fa-face-laugh-beam text-teal-500 text-3xl mb-4"></i> : null}
            <button 
                className="px-4 py-2 bg-teal-500 text-white rounded-full"
                onClick={() => setShowIcon(!showIcon)}
            >Click me</button>
        </div>
    </div>
}

export default Widget;