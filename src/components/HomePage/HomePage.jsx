import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const MyContext = React.createContext();

const HomePage = () => {

    const [title, setTitle] = useState('');
    const [currentJobId, setCurrentJobId] = useState({});
    const titleHandler = (pageTitle) => {
        setTitle(pageTitle);
    }
 
    const bundle = {
        title, titleHandler, 
    }


    return (
        <div >
            <MyContext.Provider value={bundle}>
                <Header title={title}></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </MyContext.Provider>
        </div>
    );
};

export default HomePage;