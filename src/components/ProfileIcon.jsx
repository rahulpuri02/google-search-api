import React from 'react'
import { TbGridDots } from 'react-icons/tb';
import ProfileRing from '../assets/profile-ring.svg';
import Moosa from '../assets/sidhu.jpg';

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
    <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
    </span>
    <span className="h-10 w-10 relative flex justify-center items-center">
        <img className="absolute" src={ProfileRing} alt='google-ring' />
        <span className="h-8 w-8 rounded-full overflow-hidden">
            <img className="h-full w-full" src={Moosa}  alt='moosa'/>
        </span>
    </span>
</div>
  )
}

export default ProfileIcon