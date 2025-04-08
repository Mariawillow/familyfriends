import Header from"@/components/Header.jsx";
import Footer from"@/components/Footer.jsx";
import Slider from"@/components/(main)/Slider.jsx";
import Listecard from"@/components/(main)/Listecard.jsx";
import RemoteImage from "@/components/sandbox";




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
      <div><Header  /></div>
      <RemoteImage  />
      <div><Slider /></div>
      <div><Listecard /></div>


    </div>
  );
}
