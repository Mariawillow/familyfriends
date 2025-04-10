import { LuHouse } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiUser } from "react-icons/fi";





const Footer = () => {
    return ( <div className="grid grid-cols-4 gap-3 text-2xl fixed bottom-0 left-0 w-full bg-neutral-100 p-5 text-neutral-500/30">
<LuHouse />
<FaRegStar />
<FaRegComment />
<FiUser />




    </div> );
}
 
export default Footer;