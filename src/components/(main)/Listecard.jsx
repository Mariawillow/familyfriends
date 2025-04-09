import { FaRegStar } from "react-icons/fa";
import RemoteImage from "@/components/sandbox";
import Slider from"@/components/(main)/Slider.jsx";
import Listecard from"@/components/(main)/Listecard.jsx";


export default async function Page() {
    const data = await fetch('https://api.petfinder.com/v2/animals', {
  
  // optionobjects
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    }
    });
    const animals = await data.json();
    console.log(animals);
    return (
      <div>
        <div><Slider /></div>
        <div><Listecard /></div>
  
  
  
      </div>
    );
  }