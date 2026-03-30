import React from 'react';

const Pricing = () => {
    return (
        <div className='py-20 space-y-10 w-10/12 mx-auto'>
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1   md:grid-cols-3 gap-3'>

                <div className="card w-90 bg-base-200 shadow-sm">
                    <div className="card-body">

                        <div className="">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-bold'>$0</span>/month</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn  btn-block bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] text-white rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="card w-90 bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] text-white shadow-sm">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                        <div className="">
                            <h2 className="text-3xl font-bold">Pro</h2>
                              <p>Best for professionals</p>
                            
                        </div>
                        <span className="text-xl"><span className='text-3xl font-bold'>$29</span>/month</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-white rounded-full btn-block">Start Pro Trial</button>
                        </div>
                    </div>
                </div>


                <div className="card w-90 bg-base-200 shadow-sm">
                    <div className="card-body">

                        <div className="">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-bold'>$99</span>/month</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn  btn-block bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] text-white rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Pricing;