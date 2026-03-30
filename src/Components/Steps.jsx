import React from 'react';
import UserIcon from '../assets/user.png';
import PackageIcon from '../assets/package.png';
import RocketIcon from '../assets/rocket.png';

const Steps = () => {
    return (
        <div className='bg-base-300 py-15'>
            <div className='w-10/12 mx-auto space-y-8'>
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                    <p>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                     <section className='bg-white rounded-lg shadow-lg text-center p-4 py-15 space-y-3'>
                        
                        <img className='mx-auto bg-blue-300 rounded-full p-2' src={UserIcon} alt="" />
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                     </section>
                     <section className='bg-white rounded-lg shadow-lg text-center p-4 py-15 space-y-3'>
                        
                        <img className='mx-auto bg-blue-300 rounded-full p-2' src={PackageIcon} alt="" />
                        <h3 className='text-2xl font-bold'>Choose Products</h3>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                     </section>
                     <section className='bg-white rounded-lg shadow-lg text-center p-4 py-15 space-y-3'>
                        
                        <img className='mx-auto bg-blue-300 rounded-full p-2' src={RocketIcon} alt="" />
                        <h3 className='text-2xl font-bold'>Start Creating</h3>
                        <p>Download and start using your premium tools immediately.</p>
                     </section>
                   
                </div>
            </div>
        </div>
    );
};

export default Steps;