import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../HomePage/HomePage';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobsLS, setAppliedJobsLS] = useState({});
    const allJobs = useLoaderData();

    const bundle = useContext(MyContext);

    useEffect(() => {
        bundle.titleHandler('Applied Jobs');
    }, []);

    const getAppliedJobData = () => {
        let appliedJobs = {};
        const storedJobs = localStorage.getItem('applied-job');
        if (storedJobs) {
            appliedJobs = JSON.parse(storedJobs);
        }
        return appliedJobs;
    }

    useEffect(() => {
        setAppliedJobsLS(getAppliedJobData);
    }, [])


    const [all, setAll] = useState(true);

    // drop down menu

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const [appliedJobData, setAppliedJobData] = useState([]);

    const appliedJobs = [];
    for (const id in appliedJobsLS) {
        const ID = parseInt(id);
        const appliedJob = allJobs.find(job => job.id === ID);
        appliedJobs.push(appliedJob);
    }

    const handleFilter = (e) => {
        setAll(false);
        var id = e.target.id;
        if (id == 'all') {
            setAppliedJobData(appliedJobs);
        } else {
            const x = appliedJobs.filter(e => e.placeJob == id);
            setAppliedJobData(x);
        }
    }


    // let filteredItem = [];
    // const filterOnsite = () => {
    //     filteredItem = appliedJobs.filter(job => job.placeJob === 'Onsite');
    //     setFilteredJobs(filteredItem);
    // }
    // const filterRemote = () => {
    //     filteredItem = appliedJobs.filter(job => job.placeJob === 'Remote');
    //     setFilteredJobs(filteredItem);
    // }


    return (
        <div className='my-20 width'>
            <div>
                <div className='w-full flex justify-end'>

                    <div className="relative w-fit mt-10  ">

                        <button
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 "
                            onClick={toggleDropdown}
                        >

                            Filter by
                            <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z" clipRule="evenodd" />
                            </svg>

                        </button>


                        {isOpen && (
                            <div className="absolute right-0 w-fit mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <button className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleFilter} id='all' > All </button>
                                    <button className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleFilter} id='Onsite'> Onsite </button>
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleFilter} id='Remote'>Remote</button>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
                {appliedJobs[0]==null &&<h1 className='text-5xl font-semibold'>No jobs applied yet</h1>}
                {all ? <div>{appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)}</div> : <div>{appliedJobData.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)}</div>}


            </div>
        </div>
    );
};

export default AppliedJobs;