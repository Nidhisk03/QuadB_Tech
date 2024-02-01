import React from 'react'

const Card = ({ resData }) => {


  return (
    <div className=' w-[400px] h-[296px] flex justify-between m-5
    shadow-[1px_1px_2px_2px_#C0C0C0] rounded-md'>
<div>
      <h1 className='font-[700] text-[30px]  mx-4 '>{resData.show.name}</h1>

      
      <h1 className='font-[400] text-[16px]  mx-4'><b>Genres</b> : {resData.show.genres.join(", ")}</h1>
  <h1 className='font-[400] text-[16px]  mx-4'><b>Rating</b> : {resData.show.rating.average || "NA" }</h1>
  <h1 className='font-[400] text-[16px]  mx-4'><b>Premiered</b>: {resData.show.premiered || "NA" }</h1>
  <h1 className='font-[400] text-[16px]  mx-4'><b>Type </b>: {resData.show.type|| "NA" }</h1>
  <h1 className='font-[400] text-[16px]  mx-4'><b>Language</b>: {resData.show.language|| "NA" }</h1>
      
      <a className='m-4' href={resData.show.url} target="_blank" rel="noopener noreferrer">More Details <p className='font-[600] text-[14px] mx-[65px]'>Click Here</p></a>
     
      </div>

      <div> {resData.show.image === null ?
        <div><img alt='nothing'
        className='w-[200px] h-[296px] rounded-md'  src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"

        /> </div> : <img alt='nothing'
        className='w-[200px] h-[296px]'  src={resData.show.image.medium}

        />}
      </div>
      
     



    </div>
  )
}

export default Card
