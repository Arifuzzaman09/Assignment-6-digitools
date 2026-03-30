import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2]'>
            <div className=' flex justify-around items-center w-10/12 mx-auto'>
                <div>
                    <h2 className='text-5xl font-bold text-white'>50K+</h2>
                    <p>Active Users</p>
                </div>
                <div>
                    <h2>200+</h2>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h2>4.9</h2>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;