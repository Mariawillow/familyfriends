import Slider from"@/components/(main)/Slider.jsx";
import Listecard from"@/components/(main)/Listecard.jsx";
import "@/app/globals.css";
// import Link from "next/link";





export default async function Home() {
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
