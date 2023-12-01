'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import ScrollToTop from "react-scroll-to-top";

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <Next13ProgressBar height="3px" color="#5B48C5" options={{ showSpinner: false }} showOnShallow />
            {/* <ScrollToTop className='!bg-secondary !rounded-full !bottom-28 !right-10' width='20' height='20' smooth component={<h1>Hello</h1>}/> */}
        </>
    );
};

export default Providers;
