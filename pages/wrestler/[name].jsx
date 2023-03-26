import { useRouter } from "next/router";
import Layout from "../layout";


export default function WrestlerPage (...props){

  const router = useRouter();
  
 
  return (

    <Layout>

      <img className="w-[100%] col-span-2" src={router.query.pictureUrl}/>
      <h1>{router.query.name}</h1>
      <h2>{router.query.grade}</h2>
      <p>Weight class - {router.query.weightClass}</p>

    </Layout>
  )
}