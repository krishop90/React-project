const QuoteBook1 = (props) => {
    return <div className="flex flex-col border-4 border-blue-500 rounded-lg">
        <div className="bg-cyan-400 px-40 py-3 text-black">
            {props.quote.quote}
        </div>
        <div className="bg-slate-400 px-20 py-3 text-black flex justify-center text-violet-800 text-4xl">
            {props.quote.author}
        </div>
        <div className="bg-amber-200 px-10 py-3 text-black flex justify-center">
            {props.quote.bio}
        </div>
    </div>
}

export default QuoteBook1;