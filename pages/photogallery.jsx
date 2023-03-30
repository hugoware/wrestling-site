import PhotoAlbum from "../components/photogallery";
import Layout from "./layout";

import getPhotoAlbums from '../services/photoAlbum';

export default function HomePage({ albums }) {
  return ( 
    <Layout>
      <div className="flex flex-col gap-2 grid grid-cols-2 md:grid-cols-4">
        {albums.map(album => <PhotoAlbum album={album} ></PhotoAlbum>)}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const albums = await getPhotoAlbums();
  
  return {
    props: { albums }
  };
}
