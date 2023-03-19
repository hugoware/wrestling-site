import { useEffect, useState } from "react";
import ImageCarousel from "../components/imgcarousel";
import Layout from "./layout";
import teamPicUrl from './teampic.png';

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
        <h1>Any Questions? Heres how to contact us</h1>
        <img class="h-auto max-w-full" src={teamPicUrl.src} alt="coppell girls team pic"/>
        
        <p>123-456-7890</p>
      </div>
    </Layout>
    </>

  )

}
