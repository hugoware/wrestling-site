export default function Tournaments({ tournament, location, team, date, img, photoGallLink }){


  return (
    <>
    <div className="rounded-lg bg-red-700 text-white p-3 m-2 w-[50%] grid grid-cols-2">
        <div>
          <h3 className='text-xl' >{tournament}</h3>
          <img className="w-[50%]" src={img.src} />
        </div>

        <div>
          <h4>{team}</h4>
          <p>{location}</p>
          <p>{date}</p>

          <button className="bg-slate-500 hover:bg-red-900 text-white font-bold py-2 px-4 w-[50%] content-center rounded " ><a href={photoGallLink}>Photo Gallery</a></button>
          <button className="bg-slate-500 hover:bg-red-900 text-white font-bold py-2 px-4 w-[50%] content-center rounded " >Match Videos</button>
        </div>
        

    </div>
    </>
  );
}