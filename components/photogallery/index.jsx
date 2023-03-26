export default function PhotoAlbum({ album }){
  console.log('has', album)

  return (
    <>
    <div className="rounded-lg bg-red-700 text-white p-3 m-2">
      <a href={album.url}>
        {/* <h3 className='text-xl' >{albumTitle}</h3> */}
        
        <img src={`https://cors-anywhere.herokuapp.com/${album.preview}`} crossOrigin="anonymous" />
        {album.title}<br />
        {album.count} photos
        {/* <p>{amountOfImages} images</p> */}
      </a>
    </div>
    </>
  );
}