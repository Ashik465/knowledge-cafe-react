import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

import Card from '../Card/Card';

const Main = () => {
    const [blogs,setBlog] = useState([])
    const [timeSpent, setTimeSpent] = useState(0)

useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data=>setBlog(data))
},[])
 
const spentTime = (spentTime)=>{
   
  const previousTime = JSON.parse(localStorage.getItem("watchTime")) 
  if(previousTime){
    const sum = previousTime + spentTime 
    localStorage.setItem('watchTime',sum )
    setTimeSpent(sum)
  } 
  else{
    localStorage.setItem('watchTime',spentTime )
    setTimeSpent(spentTime)
  }
}


    return (
        <div className='container mx-auto p-2'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>

                {/* card section  */}
              <div className='col-span-3 '>
                

                {blogs.map(blog=> <Card blog={blog} key={blog.id} spentTime={spentTime} ></Card>)}

              </div>
                   
{/* Bookmark section  */}
              <div>

              <h1 className='font-bold text-3xl'>Bookmark</h1>

               <Book timeSpent={timeSpent}></Book>

              </div>


            </div>
        </div>
    );
};

export default Main;