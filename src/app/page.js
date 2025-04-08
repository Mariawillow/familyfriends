import Header from"@/components/Header.jsx";
import Footer from"@/components/Footer.jsx";
import Slider from"@/components/(main)/Slider.jsx";
import Listecard from"@/components/(main)/Listecard.jsx";
import RemoteImage from "@/components/sandbox";




export default async function Home() {
  const data = await fetch('https://api.petfinder.com/v2/animals', {

// optionobjects
  headers: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJOTVRITTJCNG5xZTVIcG43QTZtVktReE1uVGw2N3psSlNMRTlmZThjd2NKb3JHWjY2cyIsImp0aSI6ImI2Y2QxOWM5NmU1ODhhMTRkYjMzMjZhMDQ2NmUzMzBhNGMwZWE0MWUzMWIyMzQyNGFiZjBiN2FjODc1ODkxNDk2ZDAwNTdmZTE3MWFmYmRlIiwiaWF0IjoxNzQ0MTAwNDE5LCJuYmYiOjE3NDQxMDA0MTksImV4cCI6MTc0NDEwNDAxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.KzOtW74RQkZhcGNS0dxwr-4fGbKDF4n50EWALHC3KXuWvTzrTvPd-kzMIBXBZpLQr6nzvlOt2iAJHv0MnyVfnumamqU2iDBsvne7mzlqIjpoLcJakWnT-tUQ0VIdvNC7VwjGBx_cJJY1rO6exOXm9dGTMkQxB3dyZEJQti3-pPZs7kQWG-HJ-ACT1QCYxjlBKVKSTiFcMAOVhkgTo2Ljzdv_m5yobzW-CrMvhnK5X7eRzK8TD6Ek0Wq5PNi0MhvrfmqCTnp4dbYvmuFIRmbQ8o-TFK6wku7NKab41f-4piM-UlXLBezBXeiueg5ZRrBFekwGr4bRKmKU8x_USATQHw"

  }
  });
  const animals = await data.json();
  console.log(animals);
  return (
    <div>
      <RemoteImage  />
      <div><Header  /></div>
      <div> <Footer /></div>
      <div><Slider /></div>
      <div><Listecard /></div>


    </div>
  );
}
