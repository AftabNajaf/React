import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub(){
const data=useLoaderData();
// const [data, setData]=useState([])

// useEffect(()=>{
//     // fetch('https://api.github.com/users/aftabnajaf')
//     // .then(response=> response.json())
//     // .then(data=>{
//     //     console.log(data);
//     //     setData(data)
//     // })
// })

    return(
        <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={150} />
        </div>
        </>
    )
}
export default GitHub;

export const githubInfoLoader =async()=>{
    const response=await fetch('https://api.github.com/users/aftabnajaf')

    return response.json()
}