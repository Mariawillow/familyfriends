import Image from "next/image";
import Dogs from "@/images/Dogs.png";

const Smallcard = () => {
    return ( <div className="flex text-sm p-2 bg-gray-300/30 rounded-2xl ml-5">
        <div className="w-10 h-10 rounded-1 overflow-hidden">
    <Image src={Dogs} alt="Hund" width={100} height={100} />   
    </div>
     <p className="mt-2 font-medium text-white pl-2">Baston Rouge</p>

    </div> );
}
 
export default Smallcard;