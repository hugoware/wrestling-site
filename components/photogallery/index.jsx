export default function PhotoAlbum({ albumTitle, amountOfImages, link, imgThumbnail }){


  return (
    <>
    <div className="rounded-lg bg-red-700 text-white p-3 m-2">
      <a href={link}>
        <h3 className='text-xl' >{albumTitle}</h3>
        
        <img src={imgThumbnail.src} />
        <p>{amountOfImages} images</p>
      </a>
    </div>
    </>
  );
}