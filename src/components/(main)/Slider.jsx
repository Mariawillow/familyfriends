import Image from "next/image";
import Dogs from "@/images/Dogs.png";
import Cats from "@/images/Cats.png";
import All from "@/images/All.png";




const Slider = () => {
    return ( <section className=" overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-3">
        <button className="flex rounded-3xl px-9 py-2  border-1 border-gray-400 text-gray-400"> <Image src={All} alt="Hund" width={50} height={50} />  Alle</button>
        <button  className="flex rounded-3xl px-9 py-2 border-1 border-gray-400 text-gray-400"> <Image src={Dogs} alt="Hund" width={50} height={50} />  Hunde</button>
        <button  className="flex rounded-3xl px-9 py-2  border-1 border-gray-400 text-gray-400"> <Image src={Cats} alt="Hund" width={50} height={50} />  Katte</button>
        </div>
        
    </section> );
}
 
export default Slider;