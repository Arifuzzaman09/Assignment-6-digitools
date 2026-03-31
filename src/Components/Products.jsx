import React, { use } from 'react';

import ProductsCarts from './ProductsCarts';

const Products = ({ productsPromise,carts,setCarts }) => {
    const products = use(productsPromise)
    

    return (
        <div className='py-20'>
            


            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto'>
                {
                    products.map((product,ind) =>

                       <ProductsCarts key={ind} product={product} carts={carts} setCarts={setCarts}></ProductsCarts>


                    )
                }
            </div>
        </div>
    );
};

export default Products;