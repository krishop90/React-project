const FancyButton = (props) => {

    const {children , large} = props;

    return (
        <button className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${large ? "text-xl" : "text-base"}`} onClick={() => console.log("Button clicked!")}>
            {children}
        </button>
    )
}

export default FancyButton;