import { useEffect, useState } from "react";
import Layout from "./layout";
import teamPicUrl from './teampic.png';
import RosterWidget from '../components/rosterWidget';

console.log(teamPicUrl);
export default function RosterPage() {

  const [roster, setRoster] = useState([]);

  async function refreshRoster(){
    const response = await fetch("/api/roster/get");
    const data = await response.json();
    console.log(data);

    setRoster(data.roster)
  }

  useEffect(() => {refreshRoster()}, []);

  return ( 
    <>
    
    <Layout>

      <div className="flex flex-col gap-2 grid grid-cols-2 md:grid-cols-4">
        {roster.map(girl => <RosterWidget {...girl} ></RosterWidget>)}
      </div>

        {/* <div>
        <h1>Hello! Welcome to girls coppell wrestling roster</h1>
        <div className="rounded-lg bg-red-700 text-white">
          <h1>{girldata.nametitle}</h1>
          <h2>{girldata.grade}</h2>
          <p>{girldata.weightClass}</p>
        </div>
      </div> */}
    </Layout>

    
    </>

  )

}

