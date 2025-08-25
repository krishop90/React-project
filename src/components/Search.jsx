const Search = () => {
    return <div className="flex-1 flex justify-center items-center bg-pink-50 text-gray-800 flex-col">
        <div className="text-6xl text-purple-700 font-bold mb-4">
            Search
        </div>
        <div className="relative w-80">
            <input
            type="text"
            placeholder="Search.."
            className="bg-pink-50 border border-purple-300 text-purple-600 p-4 w-full rounded-full pl-12"
            />  
            <i className="fa-solid fa-magnifying-glass text-teal-700 absolute left-4 top-1/2 transform -translate-y-1/2"></i>
        </div>
        <div className="mt-4">
            <button className="m-1 rounded-md bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                Image Search
            </button>
            <button className="m-1 rounded-md bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                Video Search
            </button>
        </div>
    </div>
}

export default Search;