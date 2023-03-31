import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

import Card from '../Card/Card';
import Swal from 'sweetalert2'
import Mark from '../Mark/Mark';
import Question from '../Question/Question';


const Main = () => {
    const [blogs,setBlog] = useState([])
    const [timeSpent, setTimeSpent] = useState(0)
    const [cards , setCards] = useState([])

useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data=>setBlog(data))
},[])

// spent time function 
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

// Bookmark function 
const addedToBookmark =(card)=>{
  const exist = cards.find(cd => cd.id === card.id)
  if(exist) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...Already Bookmark',
        
        
      })
      return 
  }
  const newCard = [...cards, card]
  setCards(newCard)


}


    return (
        <div className='container mx-auto p-2'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>

                {/* card section  */}
              <div className='col-span-3 '>
                

                {blogs.map(blog=> <Card blog={blog} key={blog.id} spentTime={spentTime} addedToBookmark ={addedToBookmark} ></Card>)}

               <Question></Question>

              </div>
                   
{/* Bookmark section  */}
              <div>

              

               <Book timeSpent={timeSpent}></Book>

               <div className='bg-[#1111110D] p-8 rounded-lg mb-5'>
                <h1 className=' font-bold text-xl' >Bookmarked Blogs :{cards.length} </h1> 
                  
                  {cards.map(card=><Mark card={card} ></Mark>)}

                </div>

              </div>


            </div>
        </div>
    );
};

export default Main;