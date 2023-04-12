import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const AppliedJob = ({ job }) => {



    const { image, postName, company, typeJob, placeJob, location, salaryRange, id } = job;
    const navigate = useNavigate();
    const jobDetails = (id) => {
        navigate(`/job-details/${id}`);
    }
    return (
        <div className='border rounded-xl justify-between items-center my-10 mx-10 px-14 py-8 flex '>
            <div className='flex gap-10 items-center'>
                <div>
                    <img src={image} className='w-[150px] h-auto' alt="Company Logo image" />
                </div>
                <div>
                    <h2 className=' font-semibold  text-2xl text-[#474747]'>{postName}</h2>
                    <p className='pt-3 pb-4 text-gray-500 text-xl'>{company}</p>
                    <div className='flex'>
                        <div className='border border-[#7E90FE] text-[#7E90FE] font-bold text-lg rounded-md py-2 px-5'>{placeJob}</div>
                        <div className='border border-[#7E90FE] text-[#7E90FE] font-bold text-lg rounded-md py-2 px-5 ms-2'>{typeJob}</div>
                    </div>
                    <div className='flex gap-6'> <div className='pt-3 pb-4 text-gray-500 text-xl'><FontAwesomeIcon icon={faLocationDot} /> {location}

                    </div>
                        <div className='pt-3 pb-4 text-gray-500 text-xl'><FontAwesomeIcon icon={faDollarSign} /> {salaryRange}</div>
                    </div>
                </div>

            </div>
            <button className='button h-fit' onClick={() => jobDetails(id)}>View details</button>
        </div>
    );
};

export default AppliedJob;