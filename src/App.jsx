import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import NotFound from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import Home from "./components/Home/Home";
import Marks from "./components/Marks/Marks";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";

const App = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage ></HomePage>,
    children: [
      {
        path : '/',
        element:<Home ></Home>,

      },
      {
        path : '/marks',
        element:<Marks></Marks>,
      
      },
      {
        path : '/blogs',
        element:<Blog></Blog>,
        loader : ()=> fetch('/public/questions.json')
      
      },
      {
        path : '/job-details/:jobId',
        element:<JobDetails></JobDetails>,
        loader : () =>  fetch('/public/job.json')
      
      },
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader : () =>  fetch('/public/job.json')
      }
    ],
    errorElement : <NotFound></NotFound>
  },
]);
    return (
        <>
        <RouterProvider router={router} />
  </>
    );
};

export default App;