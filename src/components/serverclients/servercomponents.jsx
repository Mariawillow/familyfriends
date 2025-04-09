import ClientList from "./clientlist";


const ServerComponent = async () => {
    const data = await fetch ("https://api.petfinder.com/v2/animals", {
        headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
});
    const animals = await data.json();
    console.log("Data fra API i ServerList:", animals)
    return <ClientList data={animals} />;
}
 
export default ServerComponent;