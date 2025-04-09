import allImage from "../images/all.png";
import catsImage from "../images/cats.png";
import dogsImage from "../images/dogs.png";


const Slider = () => {
    return ( <div className="grid grid-cols-3 gap-3">
        <p img={allImage} className=" rounded-3xl px-4 py-2 text-center border-1 border-gray-400 text-gray-400">Alle</p>
        <p img={catsImage} className=" rounded-3xl px-4 py-2 text-center  border-1 border-gray-400 text-gray-400">Hunde</p>
        <p img={dogsImage} className=" rounded-3xl px-4 py-2 text-center  border-1 border-gray-400 text-gray-400">Katte</p>
    </div> );
}
 
export default Slider;