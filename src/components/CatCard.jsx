const CatCard = (props) => {
    const {cats} = props;

    return <div className="border border-gray-500 rounded-lg p-4 bg-white shadow-lg">
        <img 
            src={cats.image}
            className="w-60 h-60 object-cover rounded-md"    
        />
        <div className="mt-3 ">
            <div className="flex text-neutral-600">
                <div className="mr-2 font-bold w-24">Name</div>
                <div> {cats.name} </div>
            </div>
            <div className="flex text-neutral-600">
                    <div className="mr-2 font-bold w-24">Age</div>
                    <div> {cats.age} </div>
            </div>
            <div className="flex text-neutral-600">
                    <div className="mr-2 font-bold w-24">Breed</div>
                    <div> {cats.breed} </div>
            </div>  
        </div>
    </div>
}

export default CatCard;