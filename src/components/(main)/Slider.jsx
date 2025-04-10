// import allImage from "../images/allImage.png";
// import catsImage from "../images/cats.png";
// import dogsImage from "../images/dogs.png";


const Slider = () => {
    return ( <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-3">
        <button  className=" rounded-3xl px-4 py-2 text-center border-1 border-gray-400 text-gray-400">Alle</button>
        <p  className=" rounded-3xl px-4 py-2 text-center  border-1 border-gray-400 text-gray-400">Hunde</p>
        <p  className=" rounded-3xl px-4 py-2 text-center  border-1 border-gray-400 text-gray-400">Katte</p>
        </div>
    </div> );
}
 
export default Slider;