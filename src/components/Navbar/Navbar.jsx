import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }

    return (
        <div className='mx-3 flex  justify-between md:items-center pt-5 relative md:bg-transparent'>
            <h1 className='text-5xl font-semibold'>Tech<span className='text-purple-700 '>Jobs</span></h1>

            
            <FontAwesomeIcon className={`md:hidden text-2xl text-gray-600 pe-4 pt-3 ${isExpanded ? 'hidden' : 'visible'}`} onClick={toggleExpansion} icon={faBars} />



            <div className={`border rounded md:border-0 md:rounded-none   md:flex justify-between duration-500 ease-in-out md:w-3/5 absolute md:static bg-white w-full md:bg-transparent p-5 text-center md:text-left h-96 shadow-lg md:shadow-none md:h-auto ${isExpanded ? ' ' : 'hidden'}`}>

                <nav className={`flex flex-col md:flex-row gap-5 text-lg text-gray-600  text-center`}>

                    <span className={`md:hidden border   px-1 w-fit me-0 ms-auto bg-gray-100`} onClick={toggleExpansion}><FontAwesomeIcon icon={faXmark} /></span>

                    <NavLink
                   className={({ isActive}) =>
                   isActive
                     ? "active"
                     : ""
                 }
                    to='/'>Home</NavLink>
                    <NavLink className={({ isActive}) =>
                   isActive
                     ? "active"
                     : ""
                 } to='/marks'>Statistics</NavLink>
                    <NavLink
                    className={({ isActive}) =>
                    isActive
                      ? "active"
                      : ""
                  }
                    to='/applied-jobs'>Applied Jobs</NavLink>
                    <NavLink
                    className={({ isActive}) =>
                    isActive
                      ? "active"
                      : ""
                  }
                    to='/blogs'>Blog</NavLink>
                </nav>

                <button className='button mt-5 md:mt-auto'>Start Applying</button>
            </div>
        </div>
    );
};

export default Navbar;




