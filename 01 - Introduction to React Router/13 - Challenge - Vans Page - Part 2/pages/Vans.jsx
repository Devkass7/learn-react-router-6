import React from "react";
import { useState, useEffect } from "react";

// import "../server "

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */

export default function Vans() {
const [vans, setVans] = useState([])

 useEffect(() => {
    async function getVans() {
      try {
        const req = await fetch("/api/vans");
        const  res = await req.json();

        setVans(res)

        // res.vans.map(van =>{
        //     console.log(van)
        // })

       
        
      } catch (error) {
        console.error("Error Feching Data");
      }
      
    }

    getVans()

    console.log(vans);
    
   
  }, []);



  return <h1>hi</h1>;
}
