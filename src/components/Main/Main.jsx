import React, { useEffect, useState } from 'react';

const Main = () => {
    const [blog,setBlog] = useState([])

useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data=>console.log(data))
},[])




    return (
        <div className='container mx-auto p-2'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
              <div className='col-span-3 '>
                <h1 className='font-bold text-3xl'>card</h1>

              </div>
                   

              <div>

              <h1 className='font-bold text-3xl'>Bookmark</h1>

              </div>


            </div>
        </div>
    );
};

export default Main;