import Image from "next/image";

const RemoteImage = () => {
    return (
     <Image 
    width={500}
    height={500}
    alt="billede af kat"
    src="https://dbw3zep4prcju.cloudfront.net/animal/425595d9-7162-4204-b1d3-25a3db9bf9b4/image/3f16c88c-9364-45db-a5a2-3c0f0f2978f2.jpg?versionId=6iNs4nnLdLC8mQ2cdTd.zSrdHiH7zD9K&bust=1744096050&width=100" /> 
    
    );
}
 
export default RemoteImage;