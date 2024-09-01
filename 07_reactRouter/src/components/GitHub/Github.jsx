import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hit1000').
    //     then(res => res.json()).
    //     then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // })

  return(
    <div className="text-center text-2xl bg-gray-800 p-20 text-white">
        Git Followers: {data.followers}
        <img src={data.avatar_url} alt="git" width={200} />
    </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    // const response = await fetch('https://api.github.com/users/hit1000')
    return response.json()
}