import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductsCarts = ({ product, carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false)


    const handleBuyer = () => {
        setIsBuy(true)

        const isfound = carts.find(item => item.id === product.id)
        if (isfound) {
            toast.error('Item already in cart !')
            return
        }


        setCarts([...carts, product])
        toast.success('Item added successfully !')
    }
    return (
        <div className="card w-90 bg-base-100 shadow-sm">
            <div className="card-body space-y-2">
                <span className={`badge badge-xs badge-warning ${product.tag === "new" ? "bg-green-200 p-3 rounded-full border-none text-green-800" : "bg-blue-200 rounded-full  text-blue-800 border-none p-3"} ${product.tag === "best seller" ? "bg-yellow-200 border-none text-yellow-700 p-3 rounded-full" : ""}`}>{product.tag}</span>
                <div className="">
                    <img className=' p-1 border border-base-300 rounded-full' src={product.img} alt="" />
                    <h2 className="text-2xl font-bold">{product.name}</h2>
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
                        onClick={handleBuyer}
                        className={`btn  btn-block   rounded-full text-white ${isBuy === true ? "bg-green-500 " : "bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2]"}`}>
                        {isBuy ? <> <FaCheck /> Added to cart! </> : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCarts;