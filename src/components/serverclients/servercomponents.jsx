import ListClient from "./clientlist";

const ListServer = async () => {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const animals = await data.json();
  console.log(animals);

  return <ListClient data={animals}></ListClient>;
};

export default ListServer;
