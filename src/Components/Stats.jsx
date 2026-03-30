import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2]'>
            <div className='flex justify-around items-center w-10/12 mx-auto py-8'>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold text-white'>50K+</h2>
                    <p className='text-white'>Active Users</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold text-white'>200+</h2>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold text-white'>4.9</h2>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;