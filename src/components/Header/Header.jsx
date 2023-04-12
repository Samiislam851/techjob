import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../HomePage/HomePage';

const Header = () => {
    const {title} = useContext(MyContext);
    let location = useLocation();
    const onHomePage = (location.pathname == "/" ? true : false);

    return (

        <div className='bg-[#F9F8FF] relative '>
    {!onHomePage && <div><img src="/images/vector.png" className='absolute bottom-0' alt="" />
    <img src="/images/vector1.png" className='absolute top-0 right-0' alt="" />
    </div>}


            <div className='header text-center'>
            
                <Navbar></Navbar>
                {onHomePage ?

                    <div className='flex flex-col-reverse md:flex-row justify-evenly pt-10 md:pt-9 items-center mx-3 header '>
                        <div className='basis-1/2'>
                            <h1 className='text-7xl font-semibold my-5'>One step Closer To Your <span className='text-purple-400'>Dream Job</span></h1>
                            <p className='text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className='my-5 button'>Get Started</button>
                        </div>
                        <div className='basis-1/2'>
                            <img className='w-full' src="images/hardy.png" alt="" />
                        </div>
                    </div>

                    : <div className='p-24'><h1 className='text-3xl font-semibold'>{title}</h1></div>}



            </div>
        </div>
    );
};

export default Header;