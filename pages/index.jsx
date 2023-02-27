import { useEffect, useState } from "react";
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
        <h1>Hello! Welcome to girls coppell wrestling page</h1>
        <img class="h-auto max-w-full" src={teamPicUrl.src} alt="coppell girls team pic"/>
        <p>The girls team is super good and swaggy</p>
      </div>
    </Layout>
    </>

  )

}

