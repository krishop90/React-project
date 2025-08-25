
const Header = () => {

    return <div className="bg-purple-700 text-white flex justify-between px-4 py-4 font-semibold"> 
        <div className="flex items-center">
            <div className="mx-4">
                About
            </div>
            <div className="mx-4">
                Store
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="mx-4">
                Setting
            </div>
            <div className="mx-4">
                <i className="fa-regular fa-circle-user text-xl mt-1"></i>
            </div>
        </div>
    </div>

}

export default Header;