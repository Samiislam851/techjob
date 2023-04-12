import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';
import Job from '../Job/Job';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/public/job.json').then(res => res.json()).then(data => setJobs(data))
    }, []);
    const [categoryJobs, setCategoryJobs] = useState([]);

    useEffect(() => {
        fetch('/public/jobCatagory.json').then(res => res.json()).then(data => setCategoryJobs(data))

    }, []);


    const [data, setData] = useState()

    const [showAll, setShowAll] = useState(false);





    const showAllHandler = () => {
        setShowAll(!showAll);}






    return (
        <div className='width'>
            <div className='text-center pt-24'>
                <h1 className='text-5xl font-semibold text-[ #1A1919;]' >Job Category List</h1>
                <p className='text-gray-400 pt-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:grid grid-cols-4 width text-center gap-6 pt-10 '>
                    {categoryJobs.map(job => <CategoryList key={job.sector} job={job}></CategoryList>)}
                </div>
            </div>
            <div className='text-center pt-24'>
                <h1 className='text-5xl font-semibold text-[#1A1919;]'>Featured Jobs</h1>
                <p className='text-gray-400 pt-10 pb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='mx-5  md:grid grid-cols-2 gap-6'>
                    {showAll?
                    jobs.map(job => <Job key={job.id} job={job}></Job>) :
                    jobs.slice(0, 4).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <button className='button my-10' onClick={showAllHandler}  >{showAll ? 'See Less' : 'See All Jobs'}</button>
            </div>
        </div>
    );
};

export default Home;