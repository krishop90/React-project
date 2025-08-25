import { useState } from "react";

const Widget2 = () => {
    const [toggleColor, setToggleColor] = useState(false);

    return <div>
        <div className="bg-green-100 border border-green-300 p-4 rounded-lg m-4 flex flex-col items-center">
            <button 
                className={`px-4 py-2 text-white rounded-full ${toggleColor ? "bg-orange-500" : "bg-amber-300"}`}
                onClick={() => setToggleColor(!toggleColor)}
            >Click me</button>
        </div>
    </div>
}

export default Widget2;