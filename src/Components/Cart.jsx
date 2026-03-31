import React from 'react';
import { toast } from 'react-toastify';


const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () => {
        setCarts([])
        toast.success('Payment successfull !')
    }


   const handleDelete = (item) =>{
      const filterArray= carts.filter(c => c.id !== item.id)
        setCarts(filterArray);
        toast.success('Item deleted !!')
        
   }
    return (
        <div className='w-10/12 mx-auto shadow-lg p-5 space-y-5 my-12 rounded-lg'>
            <h2 className='text-2xl font-bold'>Your Carts</h2>

            {
                carts.length === 0 ? <p className='text-center text-2xl font-semibold'>Your cart is empty!</p> :
                    <>
                        <div className='space-y-3'>
                            {
                                carts.map((cart, ind) =>
                                    <div key={ind} className='flex justify-between items-center bg-[#89a9c51e] p-5  rounded-lg '>
                                        <div className='flex items-center gap-2'>
                                            <img className='p-1 border  bg-white  rounded-full text-white font-bold' src={cart.img} alt="" />
                                            <div>
                                                <h2 className='text-xl font-bold'>{cart.name}</h2>
                                                <h4 className='font-semibold'>${cart.price}</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={()=>handleDelete(cart)} className='btn bg-red-400 '>Delete</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div className='flex justify-between items-center text-xl font-semibold'>
                            <h4>Total:</h4>
                            <h4>${totalPrice}</h4>
                        </div>
                        <button
                            onClick={handlePayment}
                            className='btn w-full rounded-full bg-linear-to-l from-[#4F39F6] to-[#5b48e4d2] text-white font-bold'>Proceed to Checkout</button>
                    </>

            }

        </div>
    );
};

export default Cart;