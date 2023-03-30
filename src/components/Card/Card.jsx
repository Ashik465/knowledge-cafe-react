import React from 'react';

const Card = (props) => {
    const {blogTitle,authorName,readTime,publishDate,authorImage,blogCoverImg} =props.blog
    return (
        <div>
            <div className="card card-compact w-full h-[100%] bg-base-100 shadow-xl  ">
  <figure ><img className=' rounded-lg ' src={blogCoverImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>

    </div>
    <div className='mb-5'><hr /></div>

  </div>
</div>
        </div>
    );
};

export default Card;