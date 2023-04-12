import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../HomePage/HomePage';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const [currentJob, setCurrentJob] = useState({});
    const { jobId } = useParams();
    const id = parseInt(jobId);
    const allJobs = useLoaderData();
    const { titleHandler } = useContext(MyContext);
    useEffect(() => {
        titleHandler('Job Details');
    }, []);

    useEffect(() => {
        const jb = allJobs.find(job => {
            return job.id === id
        });
        setCurrentJob(jb);
    }, []);

    const addToDb = id => {
        let appliedJobs = getAppliedJobData();


        const quantity = appliedJobs[id];
        console.log('quantity : ', quantity, 'id : ', id);
        if (!quantity) {
            appliedJobs[id] = 1;
            toast("Applied Successfully..!");
        }
        else {
            toast("You have already applied for this job");
        }
        localStorage.setItem('applied-job', JSON.stringify(appliedJobs));
    }
    const getAppliedJobData = () => {
        let appliedJobs = {};
        const storedJobs = localStorage.getItem('applied-job');
        if (storedJobs) {
            appliedJobs = JSON.parse(storedJobs);
        }
        return appliedJobs;
    }


    const applyForJob = () => {

        addToDb(currentJob.id);
    }

    return (
        <div className='width'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='flex gap-10  justify-center  my-28'>
                <div className='basis-4/6 '>
                    <div className='my-5 mx-3' >
                        <span className='text-xl font-bold'>Job Description : </span><span className='text-gray-500 text-lg'>{currentJob.jobDescription}</span>
                    </div>
                    <div className='my-5 mx-3' >
                        <span className='text-xl font-bold'>Job Responsibility : </span><span className='text-gray-500 text-lg'>{currentJob.jobResponsibility}</span>
                    </div>
                    <div className='my-5 mx-3' >
                        <span className='text-xl font-bold'>Educational Requirement : </span><span className='text-gray-500 text-lg'>{currentJob.educationalRequirement}</span>
                    </div>
                    <div className='my-5 mx-3' >
                        <span className='text-xl font-bold'>Experience: </span><span className='text-gray-500 text-lg'>{currentJob.experiences}</span>
                    </div>



                </div>
                <div className='basis-2/6 '>
                    <div className='bg-[#c9b4fd] p-7 rounded-xl bg-opacity-20'>
                        <h2 className='font-bold text-xl'>Job Details</h2>
                        <hr className='py-5' />
                        <div className='flex gap-3 gap-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline text-[#7E90FE]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg><div>
                                <span className='font-semibold text-xl'> Salary: </span> <span className='text-gray-500 text-xl'>{currentJob.salaryRange} (Per Month)</span></div> </div>

                        <div className='my-2 flex gap-3'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 inline text-[#7E90FE]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                            </svg>

                            <div >

                                <span className='font-semibold text-xl'> Job Title : </span> <span className='text-gray-500 text-xl'>{currentJob.postName}</span>
                            </div>
                        </div>

                        <h2 className='font-bold text-xl mt-5 mb-3'>Contact Information</h2>
                        <hr />
                        <div className='my-2 flex gap-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 inline text-[#7E90FE]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                            <div>
                                <span className='font-semibold text-xl'> Phone : </span> <span className='text-gray-500 text-xl'>{currentJob.phone}</span>
                            </div>
                        </div>

                        <div className='my-2 flex gap-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 inline text-[#7E90FE]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            <div>
                                <span className='font-semibold text-xl'> Email : </span> <span className='text-gray-500 text-xl'>{currentJob.email}</span>
                            </div>
                        </div>
                        <div className='my-2 flex gap-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10 inline text-[#7E90FE]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                            <div>
                                <span className='font-semibold text-xl'> Address : </span> <span className='text-gray-500 text-xl'>{currentJob.address}</span>
                            </div>
                        </div>

                    </div>
                    <button className='w-full my-5 px-10 bg-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:bg-purple-600 duration-500 ease-in-out py-4 ' onClick={applyForJob}>Apply for this Job</button>


                </div>
            </div>
        </div>
    );
};

export default JobDetails;