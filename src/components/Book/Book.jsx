import React, { useEffect, useState } from 'react';

const Book = ({timeSpent}) => {
    const [time , setTime ] = useState(timeSpent)

    useEffect(()=>{

const totalTime = localStorage.getItem('watchTime')
setTime(totalTime)

    },[timeSpent])
    
    return (
        <div>
            <div className='bg-[#6047EC1A] mb-5 rounded-lg'>
                <h1 className='text-[#6047EC] px-4 py-5 text-xl border-[#6047EC] border font-bold rounded-lg   '>Spent time on read : {time} min</h1>
            </div>
            <div className='bg-[#1111110D] p-8 '>
                <h1 >Bookmark</h1>
            </div>
        </div>
    );
};

export default Book;