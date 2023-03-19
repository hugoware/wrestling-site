import { useEffect, useState } from "react";
import ImageCarousel from "../components/imgcarousel";
import Tournaments from "../components/tournaments";
import Layout from "./layout";
import teamPicUrl from './teampic.png';
import cgc from './cgc.png';

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
  
  const tournaments = [
    {
      tournament: "Knockout Sportswear Cowgirl Classic",
      location: "CHS Arena",
      team: "Varsity, Jv",
      date: "12/2/2023",
      img: cgc,
      photoGallLink: "https://photos.google.com/share/AF1QipNdXkvheptqcPCCCVe7THJUpAxF3bO68IyBNeneswNyyrPoz6whgWsZgF6vMhTQLw?key=bF85eFpiRmwyeGc5bzlpMEZCdEFiTERnamZNQ0FB"
    }
  ]

  return ( 
    <>
  
    <Layout>
      <div>
        <h1>Coppell Cowgirls Wrestling Schedule 2022-23</h1>
        <div className="flex flex-col gap-2 ">
          {tournaments.map(girl => <Tournaments {...girl}></Tournaments>)}
        </div>

        
        
      </div>
    </Layout>
    </>

  )

}
