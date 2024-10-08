"use client"
import React from 'react'
import Link from 'next/link'
import axios from 'axios';

function Request(data: any) {
  // console.log("card component - ",data);
  const apidata = data.data;
  
    async function handleClickUp() {
        try {
            const response = await axios.post(`http://localhost:7000/v1/brand/approve/${apidata.requestdOn}?creatorId=${apidata.createdBy}`,{
              headers: { 
                authorization : localStorage.getItem("jwtToken") 
              }
            });
            // console.log("response - ",response);
          } catch (error) {
            console.error("Some Error In Fetch",error);
          }
    }
  return (
    <div className='w-5/6 h-auto my-3 py-2 rounded-xl bg-violet-300 flex items-center justify-between'>
        <h3 className='text-sm text-violet-700 font-bold w-2/6 px-2'>{apidata.note}</h3>
        <Link href={"/Creator/profile"} className='w-1/6 text-violet-700 hover:text-violet-950'>
            <h3 className='text-xs font-semibold w-full'>{apidata.createdBy}</h3>
        </Link>
        <div className='w-2/6 flex items-center justify-around'>
            <Link href={"/"} className='w-1/3'>
                <div className='w-full bg-red-500 rounded-2xl text-center py-1'>x</div>
            </Link>
            <button onClick={handleClickUp} className='w-1/3'>
                <div className='w-full bg-green-500 rounded-2xl text-center py-1'>✔</div>
            </button>
        </div>
    </div>
  )
}

export default Request