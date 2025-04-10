// // app/dyr/[id]/page.jsx
// import Single from "../../../../../components/Singlecard.jsx";

// const getAnimalById = async (id) => {
//   const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`,
//     },
//     cache: "no-store", // så vi får friske data
//   });

//   if (!res.ok) throw new Error("Noget gik galt");

//   return res.json();
// };

const AnimalPage = async ({ params }) => {
  const { id } =  params;
  const data = await getAnimalById(id);

  return <Single animal={data.animal} />;
};

// export default AnimalPage;
