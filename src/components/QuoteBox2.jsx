const QuoteBox2 = (props) => {
  const { quote } = props;

  return (
    <div className="flex flex-row items-stretch border-2 border-stone-300 rounded-l-full rounded-r-xl overflow-hidden max-w-3xl">
      <div className="bg-blue-800 text-white text-lg font-semibold px-6 py-4 flex items-center justify-center rounded-l-full">
        {quote.author}
      </div>

      <div className="bg-blue-300 text-black text-base px-6 py-4 flex items-center flex-wrap rounded-r-l leading-relaxed">
        {quote.quote}
      </div>
    </div>
  );
};

export default QuoteBox2;
