import { useRouter } from "next/router";
import { getWrestlerById } from '../../services/roster';
import Layout from "../layout";


export default function WrestlerPage ({ wrestler }){

  const router = useRouter();
  
 
  return (

    <Layout>

      <img className="w-[300px] col-span-2" src={wrestler.pictureUrl}/>

      <div>
        <h1>{wrestler.name}</h1>
        <h2>{wrestler.grade}</h2>
        <p>Weight class - {wrestler.weightClass}</p>
      </div>

    </Layout>
  )
}

export async function getServerSideProps({ params }) {

  const { name: id } = params;
  const wrestler = await getWrestlerById(id);
  
  return {
    props: {
      wrestler
    }
  }
}