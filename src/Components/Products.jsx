import React, { use } from 'react';
import { FaCheck } from 'react-icons/fa';

const Products = ({ productsPromise }) => {
    const products = use(productsPromise)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto'>
            {
                products.map(product =>

                    <div className="card w-90 bg-base-100 shadow-sm">
                        <div className="card-body space-y-2">
                            <span className="badge badge-xs badge-warning">{product.tag}</span>
                            <div className="">
                                <img className=' p-1 border border-base-300 rounded-full' src={product.img} alt="" />
                                <h2 className="text-3xl font-bold">{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                            <span className="text-xl"><span className='text-2xl font-bold'>${product.price}</span>/{product.period}</span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">


                                {
                                    product.features.map((feature, ind) =>
                                    (<li key={ind} className='flex gap-2'> <FaCheck />
                                        {feature}</li>)
                                    )
                                }



                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="btn  btn-block   bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] rounded-full text-white">
                                    Buy Now</button>
                            </div>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default Products;