"use client";
import Card from "@/components/(main)/Card.jsx";

const ListClient = ({ data }) => {
  // Fejlbeskyttelse: vis besked eller loader, hvis data ikke er klar
  if (!Array.isArray(data?.animals)) {
    return <p>Ingen dyr at vise endnu...</p>;
  }

// Logge billederne for at sikre, at de er der
data.animals.forEach((animal) => {
    console.log(animal.photos?.[0]?.small);  // Tjek hvad der bliver logget
  });

  return (
    <ul className="flex flex-wrap gap-3 my-4">
      {data.animals.map((animal) => (
        <Card key={animal.id} animal={animal} />
      ))}
    </ul>
  );
};

export default ListClient;
