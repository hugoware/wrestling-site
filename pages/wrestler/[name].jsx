import { useRouter } from "next/router";
import { getWrestlerById } from '../../services/roster';
import getLatestVideos from '../../services/videoFeed';
import Layout from "../layout";


export default function WrestlerPage ({ wrestler, videos }){

  const router = useRouter();
  
 
  return (

    <Layout>

      <img className="w-[300px] col-span-2" src={wrestler.pictureUrl}/>

      <div>
        <h1>{wrestler.name}</h1>
        <h2>{wrestler.grade}</h2>
        <p>Weight class - {wrestler.weightClass}</p>
      </div>

      {/* temp */}
      <div className="grid grid-cols-2 gap-y-10" >
        {videos.recent.map(video => (
          <a href={video.url} className="block p-5">
            <img src={video.thumbnail} />
            <h3>{video.title}</h3>
            <h5>Views: {video.views}</h5>
          </a>
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