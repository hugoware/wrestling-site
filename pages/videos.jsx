import { useEffect, useState } from "react";
import Layout from "./layout";
import VideoFeed from "../components/video-feed"

export default function HomePage() {


  return ( 
    <>
  
    <Layout isableTopMargin={true}>
      <div className="grid grid-cols-2 md:grid-cols-4">
      <VideoFeed />
      </div>
    </Layout>
    </>

  )

}

