import { useEffect, useState } from "react";
import PhotoAlbum from "../components/photogallery";
import Layout from "./layout";
import photogallsample from "./photogallsample.png"

export default function HomePage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  
  useEffect(() => {
    fetch('/api/echo')
    .then(res => res.json())
    .then(
      (result) =>{
        console.log(result);
      }
      
    )
  });

  const fakeData = [
    {
      albumTitle: "NYE Quad 2023",
      amountOfImages: "263",
      link: "https://photos.google.com/share/AF1QipMC_Ck8jdaxCTu9G5EFqIwYCuxgQ3FU8AJ3LCW-tdGA8_2dGIjkE3OvMipR-P4s1w?key=alF2cDkwMGFqcUV4QUdSOVZ4ZXBrUEJtSWhReEhB",
      imgThumbnail: photogallsample
    },
    {
      albumTitle: "NYE Quad 2023",
      amountOfImages: "263",
      link: "https://photos.google.com/share/AF1QipMC_Ck8jdaxCTu9G5EFqIwYCuxgQ3FU8AJ3LCW-tdGA8_2dGIjkE3OvMipR-P4s1w?key=alF2cDkwMGFqcUV4QUdSOVZ4ZXBrUEJtSWhReEhB",
      imgThumbnail: photogallsample
    }
  ]

  return ( 
    <>
  
    <Layout>
      <div>

      <div className="flex flex-col gap-2 grid grid-cols-2 md:grid-cols-4">
        {fakeData.map(girl => <PhotoAlbum {...girl} ></PhotoAlbum>)}
      </div>
       
      </div>
    </Layout>
    </>

  )

}
