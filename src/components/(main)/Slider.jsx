import Image from "next/image";
import Dogs from "@/images/Dogs.png";
import Cats from "@/images/Cats.png";
import All from "@/images/All.png";




const Slider = () => {
    return ( <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-3">
        <button className=" flex rounded-3xl px-4 py-2  border-1 border-gray-400 text-gray-400"> <Image src={All} alt="Hund" width={50} height={50} />  Alle</button>
        <p  className="flex rounded-3xl px-4 py-2 border-1 border-gray-400 text-gray-400"> <Image src={Dogs} alt="Hund" width={50} height={50} />  Hunde</p>
        <p  className="flex rounded-3xl px-4 py-2  border-1 border-gray-400 text-gray-400"> <Image src={Cats} alt="Hund" width={50} height={50} />  Katte</p>
        </div>
        
    </div> );
}
 
export default Slider;