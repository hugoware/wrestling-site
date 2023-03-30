import Link from "next/link";

export default function RosterWidget({ name, grade, pictureUrl, weightClass, id }){

  
  return (
    <>
    <div className="rounded-lg bg-red-700 text-white p-3">
    <img className="w-[100%] col-span-2" src={pictureUrl}/>
      
      
      
      
      <div className="grid grid-cols-1">
      <h2>{grade}</h2>
      <h1 className="text-xl">{name}</h1>
      <p>Weight class - {weightClass}</p>
      </div>

      <Link className="bg-slate-500 hover:bg-red-900 text-white font-bold py-2 px-4 w-full rounded float-right " href={`/wrestler/${id}`}>Match Videos</Link> 
    </div>
    
    </>
  );
}