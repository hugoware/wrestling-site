import { useRouter } from "next/router";
import { getWrestlerById } from '../../services/roster';
import getLatestVideos from '../../services/videoFeed';
import Layout from "../layout";


export default function WrestlerPage ({ wrestler, videos }){

  const router = useRouter();
  
 
  return (

    <Layout>

<div className="grid grid grid-cols-2 md:grid-cols-4 gap-y-10" >
     
<div className="grou h-30 rounded-lg bg-red-700 text-white ">
 

    <div className="bg-slate-500 text-center hover:bg-red-900 text-white font-bold w-full rounded float-right ">
      <div class=" relative group">
        <img className="w-[100%]" src={wrestler.pictureUrl}/>


        <div class="opacity-100 group-hover:opacity-100 duration-300 absolute h-[100%] inset-x-0 bottom-0 flex flex-col justify-between items-start p-4 gap-4  bg-slate-500 bg-opacity-50 text-white font-semibold ">

        <div>
          <h2 className="text-xl">{wrestler.grade}</h2>
          <p className="text-xl">Weight class - {wrestler.weightClass}</p>
        </div>
        
        <div>
          <p className="text-sm">This athlete has no Bio</p>
          <h1 className="text-sm">Click for Match videos</h1>
        </div>
        

        </div>

      </div>
      {wrestler.name}</div> 
    
    </div>
    




      
      {/* temp */}
      
        {videos.recent.map(video => (
         
<div className="rounded-lg bg-red-700 text-white p-3 m-2">
<a href={video.url}>
  <h3 className='text-xl' >{video.title}</h3>
  
  <img src={video.thumbnail} />
  <p>Views : {video.views}</p>
</a>
</div>
        ))}
      </div>

      <div>
        <a href={videos.url} >See all videos</a>
      </div>
    
    </Layout>
  )
}

export async function getServerSideProps({ params }) {

  const { name: id } = params;
  const wrestler = await getWrestlerById(id);
  const videos = await getLatestVideos(id);
  
  return {
    props: {
      wrestler,
      videos
    }
  }
}