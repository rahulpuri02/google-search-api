import React from 'react'
import HomeHeader from './HomeHeader';
import Logo from '../assets/google-logo.png'
import SearchInput from './SearchInput';
const Home = () => {
  return (
    <div className='h-[100vh] flex flex-col'>
        <HomeHeader />
        <main className='grow flex justify-center'>
            <div className='w-full px-5 flex flex-col items-center mt-44 '>
                <img className='w-[177px] md:w-[272px] mb-8' src={Logo} alt='google-logo' />
                <SearchInput />
            </div>
       
        </main>
    </div>
  )
}

export default Home