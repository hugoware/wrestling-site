import { useEffect, useState } from "react";
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
  
    <Layout disableTopMargin={true}>
     
        
        
          <div className="relative">
            <img className="grayscale" src={Cgc.src}/>
            <div className="bg-white text-center p-8 rounded-lg opacity-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-4xl text-black">Welcome to Cowgirls Wrestling page</h1>
              <p className="text-center">Our main goal of this website is to allow wrestling athletes to be able to reflect on their matches and wrestling so they can figure out ways for them to improve</p>

              <button className="m-4 text-white bg-red-700 hover:red-900 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800"><a href="./videos">Match Videos</a></button>
              </div>
          </div>
        
        
      
    </Layout>
    </>

  )

}
