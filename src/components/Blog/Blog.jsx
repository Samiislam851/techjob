import React, { useContext, useEffect } from 'react';
import { MyContext } from '../HomePage/HomePage';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
const QandA = useLoaderData();


    const {titleHandler} = useContext(MyContext);
    useEffect(() => {
        titleHandler('Questions and Answers');
    }, []);

    return (
        <div className='width'>
            {QandA.map(QA => <div className='my-10' key={QA.id}>
           <h1 className='text-4xl my-5'>{QA.question}</h1>
           <p className='text-2xl text-gray-600'>{QA.answer}</p>

            </div>)}
        </div>
    );
};

export default Blog;