import React, {useEffect, useState} from 'react'
import {storefront} from "./utils/storefront";
import {currencyFormat} from "./utils/currencyFormat"

export default function Product() {
    const [product, setProduct] = useState({});
    const root = document.querySelector("#product");
    const handle = root.dataset.handle;

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await storefront(singleProduct, {handle});
                setProduct(res.data.product);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    if(product) {
        console.log(product)
    }

    return (
        <>
            {product && (<main
                    className='product-container lg:flex lg:items-center lg:gap-x-12 xl:gap-x-24 lg:px-20 xl:px-40 lg:py-20 lg:m-auto lg:mt-2 lg:max-w-8xl'>
                    <h1 className='absolute w-1 h-1 overflow-hidden p-0 -m-1'>Product page</h1>

                    <div className="destop-preview hidden lg:block">
                        <div className="preview xl:min-w-md max-w-3xl rounded-2xl overflow-hidden">
                            <img
                                src={product.images?.edges[0].node.transformedSrc}
                                alt="product-preview"/>
                        </div>
                    </div>

                    <section
                        className="product-details container mx-auto px-6 pt-5 sm:pt-10 lg:pt-5 pb-20 lg:pb-5 lg:pr-0 lg:pl-7 xl:ml-1">
                        <h3 className="product capitalize text-very-dark-blue font-bold text-3xl sm:text-4xl sm:leading-none pb-3">
                            {product.title}
                        </h3>
                        <p className="text-dark-grayish-blue pb-6 lg:py-7 lg:leading-6">
                            {product.description}
                        </p>
                        <div className="amount font-bold flex items-center justify-between lg:flex-col lg:items-start mb-6">
                            <div className="discount-price items-center flex">
                                <div className="price text-3xl">{currencyFormat(product.variants?.edges[0].node.price.amount)}</div>
                            </div>

                            {product.variants?.edges[0].node.compareAtPrice?.amount && (
                                <div className="original-price text-grayish-blue line-through lg:mt-2">
                                    {currencyFormat(product.variants?.edges[0].node.compareAtPrice?.amount)}
                                </div>
                            )}
                        </div>
                        <div className="sm:flex lg:mt-8 w-full">
                            <button
                                className="cart w-full h-14 bg-blue-500	rounded-lg lg:rounded-xl mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center lg:w-3/5 hover:opacity-60">
                                Add to cart
                            </button>
                        </div>
                    </section>
                </main>
            )}
       </>
    )
}

const singleProduct = `
    query SingleProduct($handle: String!) {
  product(handle: $handle) {
    title
    description
    variants (first: 1) {
      edges {
        node {
          id
          price {
            amount
          }
          compareAtPrice {
            amount
          }
          }
      }
    }
    images(first: 1) {
      edges {
        node {
          transformedSrc
        }
      }
    }
  }
}
`