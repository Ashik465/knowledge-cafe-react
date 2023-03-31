import React from 'react';

const Mark = ({card}) => {
    return (
        <div>
            <div className='bg-white rounded-lg'>
           <h1 className='my-4 p-5'>{card.blogTitle}</h1>
            </div>
        </div>
    );
};

export default Mark;