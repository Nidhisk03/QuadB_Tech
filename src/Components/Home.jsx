import React,{useEffect} from 'react'
import Card from './Card';

import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
import Display from './Display';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await data.json();
     dispatch(addUser(json));
  }


  return (


    <div>
      <div className='h-[80px] w-full bg-[#0a0a0ac5]'>
        <img className='h-[65px] pt-[14px] mx-16' src='https://static.tvmaze.com/images/tvm-header-logo.png' />
      </div>
     
      <Display />
    </div>
  )
}

export default Home
