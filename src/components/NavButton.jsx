const NavButton = (props) => {
    const {icon , onClick , show} = props;

    if(show === false){
        return null;
    }

    return <button 
        className="bg-purple-400 rounded-md py-3 px-3 m-8 text-xl text-purple-100"
        onClick={onClick}
    >
        <i className={`fa-solid ${icon}`}></i>
    </button>
}


export default NavButton;