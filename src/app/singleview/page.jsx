// "use client";

import ServerComponent from "@/components/serverclients/servercomponents.jsx";
import RemoteImage from "@/components/sandbox";
import "@/app/globals.css";


import Link from "next/link";

const Singleview = () => {
    return <div> 
    <div>
 <RemoteImage />
       </div>
       <h1 className="text-2xl">Singleview</h1>
  <ServerComponent />

</div>
}
export default Singleview;
