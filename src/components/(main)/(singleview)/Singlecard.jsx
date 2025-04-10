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
        {/* <Details></Details> */}
        <p className="text-[#33333366]">Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde og er venlig over for andre dyr. På trods af sin hvide pels elsker den regn og vandpytter.</p>
        <p className="text-[#33333366] text-[13px]">Opdateret den 13. juli.</p>
         <button className="w-[100%] flex gap-2.5 bg-[#f2968f] rounded-full py-4.5 justify-center items-center my-4">Adopter jwfkd knfkndf</button>

      </article>
    );
  };
  
  export default Single;

