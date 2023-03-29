import { useRouter } from "next/router";
import Layout from "../layout";


export default function WrestlerPage (...props){

  const router = useRouter();
  
 
  return (

    <Layout>


      <div className="w-[25%] rounded-lg bg-red-700 text-white p-3">


      <h1>{router.query.name}</h1>
      <img className="w-[100%] col-span-2" src={router.query.pictureUrl}/>
      
  

     
    </div>
    
    
    </Layout>
  )
}