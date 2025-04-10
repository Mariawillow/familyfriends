// const Single = ({ animal }) => {
//   return (
//     <article className="w-80">
//       <div className="bg-orange-400 w-80 h-96 rounded-4xl relative">
//         {/* Her kunne du vise billede fx */}
//         <img
//           src={animal.photos?.[0]?.medium || "/placeholder.jpg"}
//           alt={animal.name}
//           className="w-full h-full object-cover rounded-4xl"
//         />
//       </div>
//       <div className="absolute bottom-65 left-5">
//         <Smallcard />
//       </div>
//       <h1>{animal.name}</h1>
//       <p className="text-[#33333366]">{animal.description}</p>
//       <p className="text-[#33333366] text-[13px]">
//         Opdateret den {new Date(animal.updated_at).toLocaleDateString("da-DK")}
//       </p>
//       <button className="w-full flex gap-2.5 bg-[#f2968f] rounded-full py-4.5 justify-center items-center my-4">
//         Adopter {animal.name}
//       </button>
//     </article>
//   );
// };



import "@/app/globals.css";
import Smallcard from "./Smallcard";

const Single = () => {
    return (
      <article className=" w-80" >
        <div className="bg-orange-400 w-80 h-96 rounded-4xl relative"></div>
            {/* Placer billedet ovenpå */}
        <div className="absolute bottom-65 left-5">
      <Smallcard />
    </div>
        <h1>Samojed Willie</h1>
        <p className="text-[#33333366]">Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde og er venlig over for andre dyr. På trods af sin hvide pels elsker den regn og vandpytter.</p>
        <p className="text-[#33333366] text-[13px]">Opdateret den 13. juli.</p>
         <button className="w-[100%] flex gap-2.5 bg-[#f2968f] rounded-full py-4.5 justify-center items-center my-4">Adopter jwfkd knfkndf</button>

      </article>
    );
  };
  
  export default Single;

