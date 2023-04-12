import React from 'react';

const CategoryList = ({job}) => {
  const  {logo,sector,number} = job;
    return (
        <div className='bg-[#faf3ff] h-full p-6 m-5 rounded-lg flex flex-col gap-5 justify-evenly'>
         <img src={logo} className='w-auto m-auto ' alt="" /> 
           <h1 className='text-2xl font-medium text-[#474747]'> {sector}</h1>
           <p className='text-gray-400 font-normal'> {number} Jobs Available</p>
        </div>
    );
};

export default CategoryList;