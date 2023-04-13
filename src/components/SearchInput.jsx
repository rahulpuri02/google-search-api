import React, { useState } from 'react'
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div
            id="searchBox"
            className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
        >
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={(e) => e.target.value}
                 autoFocus
                className="grow outline-0 text-black/[0.87]"
            />
            <div className="flex items-center gap-3">
              {
                searchQuery && (
                  <IoMdClose size={24} color='#70757a' className='cursor-pointer' 
                  onClick={() => setSearchQuery('')}/>
                )
              }
                <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
                <img
                    className="h-6 w-6 cursor-pointer"
                    src={ImageIcon}
                    alt="image-icon"
                />
            </div>
        </div>
  )
}

export default SearchInput