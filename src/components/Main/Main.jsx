import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';

const Main = () => {
    const [blogs,setBlog] = useState([])

useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data=>setBlog(data))
},[])




    return (
        <div className='container mx-auto p-2'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
              <div className='col-span-3 '>
                <h1 className='font-bold text-3xl'>card</h1>

                {blogs.map(blog=> <Card blog={blog} key={blog.id} ></Card>)}

              </div>
                   

              <div>

              <h1 className='font-bold text-3xl'>Bookmark</h1>

              </div>


            </div>
        </div>
    );
};

export default Main;