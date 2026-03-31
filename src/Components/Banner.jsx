import React from 'react';
import BannerImg from '../assets/banner.png';
import PlayImg from '../assets/play.png';

const Banner = () => {
    return (
        <div className="hero  min-h-screen w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} alt="" />
                <div>
                    <div className='flex items-center bg-blue-200 w-80 rounded-full px-1'>
                        <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
                        <p className=' bg-blue-400 bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] w-72 rounded-full  text-center bg-clip-text text-transparent '> New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className='space-x-3'>
                        <button className="btn bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2]  rounded-full text-white">Explore Products</button>
                        <button className="btn bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2]  rounded-full  bg-clip-text text-transparent "> <img src={PlayImg} alt="" />Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;