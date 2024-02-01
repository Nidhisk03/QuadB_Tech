import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
const Display = () => {


  const list = useSelector(store => store.user.nowPlayingMovies );
  if(list === null)return ;
  return (
    
    <div className='flex flex-wrap ml-5'>
       {list.map((lists) => (

        <Link
          key={lists.show.id}
          to={"/summary/" + lists.show.id}
        >
          <Card resData={lists} />
        </Link>

      ))}

    </div>
  )
}

export default Display
