import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className='text-center mt-32'>
      <h2 className='text-5xl my-5 '>Page Not Found <span className='text-red-700 text-7xl'> <br /> 404 !</span> </h2>
      <div className='text-5xl mb-10 text-cyan-700'><FontAwesomeIcon icon={faFaceFrown} /></div>
      <p className='text-xl font-semibold'>Sorry, the requested page could not be found.</p>
      <button className='py-2 px-5 bg-red-600 text-white font-semibold text-2xl mt-10 rounded-md' onClick={goBack} >Go Back</button>
    </div>
  );
}

export default NotFound;
