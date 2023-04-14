import React from 'react'
import { TbGridDots } from 'react-icons/tb';
import ProfileRing from '../assets/profile-ring.svg';
import ProfilePic from '../assets/profile-pic.png';
import { AiOutlineSetting } from 'react-icons/ai';

const SearchResultIcon = () => {
  return (
    <div className="flex gap-2">
           <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <AiOutlineSetting size={20} color="#5f6368" />
    </span>
    <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
    </span>
    <span className="h-10 w-10 relative flex justify-center items-center">
        <img className="absolute" src={ProfileRing} alt='google-ring' />
        <span className="h-8 w-8 rounded-full overflow-hidden">
            <img className="h-full w-full" src={ProfilePic}  alt='google-profile'/>
        </span>
    </span>
</div>
  )
}

export default SearchResultIcon