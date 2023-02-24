import { useEffect, useState } from "react";

export default function HomePage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/echo')
    .then(res => res.json())
    .then(
      (result) =>{
        console.log(result);
      }
      
    )
  });

  return <div className="font-bold text-3xl text-gray-500">Hello 22</div>;
}