import { useRouter } from "next/router";


export default function WrestlerPage (...props){

  const router = useRouter();
  
 
  return `Hello ${router.query.name};`
}