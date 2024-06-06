import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Home = () => {
    const [arr,setArr]=useState([])
    useEffect(()=>{
        const handleData = async()=>{
            try{
                const response = await axios.get("http://localhost:8000/movies",{
                    headers:{
                        "Content-Type":"applicatoin/json"
                    }
                });
            
            setArr(response.data)
            console.log(arr)
            }
            catch(err){
                console.log(err);
            }
        }
        handleData();
    },[])
  return (
    <div className='h-[93.2vh] flex justify-center pt-[2rem] bg-[#000000]'>
        <div className='flex flex-col overflow-auto no-scrollbar'>
        {
            arr.map((item)=>{
                return(
                    <Card
                    title={item.name}
                    url={item.url}
                    desc={item.desc}
                    info={item.detail}
                    />
                )
            })
        }
        </div>
      
    </div>
  )
}

export default Home
