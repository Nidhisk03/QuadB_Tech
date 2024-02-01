import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom';
import { useSelector } from "react-redux"

const Summary = () => {
  const { showId } = useParams();
  console.log(showId);

  const list = useSelector(store => store.user.nowPlayingMovies);
  console.log(list);

  //  const filterList = list.filter((res) => res.show.id === 34653);
  const filterList = list.filter((res) => res.show.id == showId);

  console.log(filterList)

  return (
    <div className='flex mx-[200px] shadow-md mt-[25px] rounded-md'>
      <div className=' mt-10  h-[500px] w-[700px]'>
        <h1 className='font-[700] text-[50px] flex justify-center items-center'> {filterList[0].show.name}</h1>
        

<div className='flex'>
        <span className='flex text-[20px] font-[600] ml-8'>Language : 
      </span> <span className='my-[5px] mx-2'>{filterList[0].show.language}</span>
      </div> 

      <div className='flex'>
        <span className='flex text-[20px] font-[600] ml-8'> Genres: 
      </span> <span className='my-[5px] mx-2'>{filterList[0].show.genres.join(", ")}</span>
      </div>     

      <div className='text-[20px] font-[600] mx-8'>Summary</div>
        <div className='w-[650px] mx-8'> {filterList[0].show.summary}</div>

      <a className='mx-8 ' href={filterList[0].show.url} target="_blank" rel="noopener noreferrer">Want to discover additional information about the movie. <span className='font-[500] mx-[3px]'>Click Here</span></a>
   
   <div className='mx-8 pt-[5px] m-2 w-[120px] p-[4px] h-[38px] bg-[#3c948b] text-white rounded-md'>
   
    <Link to={"/form/" + showId}>
    <button className='px-2  text-[18px]'>Book Ticket</button>
        </Link>
    
    </div>
      </div>


      <div className='w-[350px]  mt-10 bg-[#3c948b] text-white rounded-md'>
        <div> {filterList[0].show.image === null ?
          <div><img alt='nothing'
          className='w-[300px] h-[450px]'  src="https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
  
          /> </div> : <img alt='nothing'
            className='w-[300px] h-[450px]'
            src={filterList[0].show.image.medium}

          />}
          <div className='flex justify-center items-center font-[600] text-[20px] mt-[9px] bg-[#3c948b]'>

            <a className='bg-[#3c948b]' href={filterList[0].show.officialSite} target="_blank" rel="noopener noreferrer">Watch Now</a>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Summary
