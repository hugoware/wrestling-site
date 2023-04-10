import Link from "next/link";

export default function RosterWidget({ name, grade, pictureUrl, weightClass, id }){

  
  return (
    <>
    <div className="grou h-30 rounded-lg bg-red-700 text-white ">
 

    <Link className="bg-slate-500 text-center hover:bg-red-900 text-white font-bold py-2 px-4 w-full rounded float-right " href={`/wrestler/${id}`}>
      <div class=" relative group">
        <img className="w-[100%]" src={pictureUrl}/>
        <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-[100%] inset-x-0 bottom-0 flex items-end text-xl bg-slate-500 bg-opacity-50 text-white font-semibold">


        <h1 className="text-xl absolute top-5 left-5">Click for Match videos</h1>
        <h2 className="absolute top-20 left-5">{grade}</h2>
        <p className="absolute left-5">This athlete has no Bio</p>
        
        <p className="absolute left-5 bottom-5">Weight class - {weightClass}</p>
        </div>
      </div>
      {name}</Link> 
    
    </div>
    
    
    </>
  );
}