import { useEffect, useState } from "react";
import ImageCarousel from "../components/imgcarousel";
import Layout from "./layout";
import teamPicUrl from './teampic.png';
import Cgc from './cgc.png';

console.log(teamPicUrl);
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

  return ( 
    <>
  
    <Layout>
      <div>
        
        <div>
        
        <body>
          <div className="relative">
            <img className="grayscale" src={Cgc.src}/>
            <h1 className="absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Welcome to Cowgirls Wrestling page</h1>
          </div>
        </body>
        
        </div>
      </div>
    </Layout>
    </>

  )

}
