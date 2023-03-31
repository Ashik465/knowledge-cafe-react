import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {blogTitle,authorName,readTime,publishDate,authorImage,blogCoverImg} =props.blog
    const spentTime =props.spentTime
    const addedToBookmark = props.addedToBookmark
    return (
        <div>
            <div className="card card-compact w-full h-[100%] bg-base-100 shadow-xl  ">
  <figure ><img className=' rounded-lg ' src={blogCoverImg} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='flex justify-between flex-row' >
        <div className='flex gap-5'>
       
          <img className="w-14 rounded-full"src={authorImage} />
          <div className='flex flex-col '>
             <h1 className=' font-bold text-2xl'>{authorName}</h1>
             <p className=' text-[#11111199]'>{publishDate} </p>
         
              </div>
        </div>
        <div>
         
        <p className='text-[#11111199] text-xl '>{readTime} min read <FontAwesomeIcon onClick={()=> addedToBookmark(props.blog)} className='cursor-pointer' icon={faBookmark} /> </p>
        </div>
    </div>
    <h1 className='py-5 font-bold text-4xl'>{blogTitle}</h1>

     <p className='text-xl pb-4'>#beginners  #programming</p>

     <p onClick={()=>spentTime(readTime)} className='text-[#6047EC] text-xl underline pb-4 cursor-pointer'>Mark as read</p>
    
    <div className='mb-5'><hr /></div>

  </div>
</div>
        </div>
    );
};

export default Card;