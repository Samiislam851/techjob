import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';
import JobDetails from '../JobDetails/JobDetails';
import { MyContext } from '../HomePage/HomePage';
const Job = ({ job }) => {
    const { placeJob, typeJob, location, salaryRange, postName, company, image } = job
   const navigate = useNavigate();
    const jobDetails = () =>{
        navigate(`/job-details/${job.id}`);
     
    } 
   
    return (
        <div className='job-card text-center w-full my-5 md:text-left border rounded-lg py-7 px-10 '>
            <img src={image} className='h-14 mx-auto md:mx-1 mb-4' alt="" />
            <h3 className='text-2xl my-2 font-semibold'>{postName}</h3>
            <p className='text-gray-500 mb-3 text-xl'>{company}</p>
            <span className='flex  gap-2 w-fit m-auto md:m-1'>
                <span className='border  rounded py-1 px-3 font-semibold border-[#7E90FE] text-[#7E90FE]'>{placeJob}</span>
                <span className='border   rounded py-1 px-3 font-semibold border-[#7E90FE] text-[#7E90FE]'>{typeJob}</span>
            </span>
            <div className='mt-3 text-gray-500'><FontAwesomeIcon icon={faLocationDot} /> {location}</div>
            <button to='job/view-details' className='button my-3' onClick={jobDetails} > View Details</button>

        </div>
    );
};

export default Job;