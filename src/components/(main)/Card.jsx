// import Image from "next/image";
// import { LuStar } from "react-icons/lu";
// import Link from "next/link"; // 👈 husk at importere

// const Card = ({ animal }) => {
//   return (
//     <Link href={`/dyr/${animal.id}`} className="block">
//       <li className="flex flex-col gap-1 mb-2 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
//         {/* Hvis photoUrl findes, vis billede, ellers vis placeholder */}
//         {animal.photos?.[0]?.small ? (
//           <Image
//             alt={`Billede af ${animal.name}`}
//             width={100}
//             height={100}
//             src={animal.photos?.[0]?.small}
//             className="rounded-2xl w-40 h-28 object-cover"
//           />
//         ) : (
//           <div className="w-40 h-28 bg-amber-600 rounded-2xl" />
//         )}

//         <div className="flex justify-end pt-2 pb-1">
//           <div className="bg-gray-200 p-1 rounded-full overflow-hidden">
//             <LuStar />
//           </div>
//         </div>

//         <div className="flex justify-between items-center mx-2">
//           <h2 className="max-w-[100px] font-medium">{animal.name}</h2>
//           <p className="text-[#33333366] text-[13px]">{animal.age}</p>
//         </div>

//         <p className="text-[#33333366] text-xs mx-2 mb-4 max-w-[140px]">
//           {animal.breeds.primary}
//         </p>
//       </li>
//     </Link>
//   );
// };

// export default Card;




import Image from "next/image";
import { LuStar } from "react-icons/lu";



const Card = ({ animal }) => {
  return (
    <li className="flex flex-col gap-1 mb-2 rounded-2xl shadow">
      

      {/* Hvis photoUrl findes, vis billede, ellers vis placeholder */}
      {animal.photos?.[0]?.small ? (
        <Image
          alt="Billede af dyr"
          width={100}
          height={100}
          src={animal.photos?.[0]?.small}
          className="rounded-2xl w-40 h-28 object-cover"
        />
      ) : (
        <div className="w-40 h-28 bg-amber-600 rounded-2xl"></div>
      )}
       <div className="flex justify-end pt-2 pb-1">
      <div className="bg-gray-200 p-1 rounded-full overflow-hidden">
        <LuStar className="" />
      </div>
      </div>
      <div className="flex justify-between items-center mx-2">
        <h2 className="max-w-[100px]">{animal.name}</h2>
        <p className="text-[#33333366] text-[13px]">{animal.age}</p>
      </div>
      <p className="text-[#33333366] text-xs mx-2 mb-4 max-w-[140px]">
        {animal.breeds.primary}
      </p>
    </li>
  );
};

export default Card;
