import ListClient from "./clientlist";

const Servercomponent = async () => {
  //Der fetches data, og der sendes en HTTP anmodning til den eksterne API (petfinder)
  //await gør, at funktionen venter på, at anmodningen skal færdiggøres, før den går videre til næste linje
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    //headers indeholder en Authorization-header, som sender en API-token: process.env.API_TOKEN. Vores anmodning for at autentificere os.
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  //Når fetch-anmodningen er færdig, bliver den returnerede respons (data) omdannet til JSON-format ved hjælp af data.json()
  const animals = await data.json();
  console.log(animals);

  //Efter at dataene er hentet og logget, returnerer Servercomponent en JSX-struktur, som renderer ListClient-komponenten.
//data={animals} sender de hentede dyre-data som en prop til ListClient-komponenten. ListClient vil modtage animals og bruge dem til at vise dyrene på klienten (i frontend)
  return <ListClient data={animals}></ListClient>;


  //trols:

  // return <ul>
  //   {data.animals.map((animal) => <li key={animal.id}><Link href="/singleview/id">{animal.name}</Link>
  //   <Link href="{singleview}">{animal.name}</Link>
  //   </li>)}
  // </ul>
};

export default Servercomponent;
