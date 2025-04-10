"use client";
//Komponetet indhentes - det er det komponent alle dyrene skal op
import Card from "@/components/(main)/Card.jsx";

//ListClient modtager data om dyrene (modtager data som en prop)
const ListClient = ({ data }) => {

  // Fejlbeskyttelse: viser besked, hvis data ikke er klar
  // (?. er en optional chaining operator, som sikrer, at der ikke opstår fejl, hvis data er null eller undefined)
  if (!Array.isArray(data?.animals)) {
    return <p>Ingen dyr at vise endnu...</p>;
  }

// Logge billederne for hvert animal for at sikre, at de er der
data.animals.forEach((animal) => {
  //For hvert dyr logges URL'en af det første billede (animal.photos?.[0]?.small).
    console.log(animal.photos?.[0]?.small); 
  });

  //Så oprettes der en liste.
  return (
    <ul className="flex flex-wrap gap-3 my-4">
{/* For hvert animal, bruges map til at generere Card components */}
      {data.animals.map((animal) => (
        // Hvert Card får en key, som er animal.id, for at hjælpe React med at optimere rendering
        <Card key={animal.id} animal={animal} />
      ))}
    </ul>
  );
};

//Den ekspoteres ud så den kan bruges.
export default ListClient;
