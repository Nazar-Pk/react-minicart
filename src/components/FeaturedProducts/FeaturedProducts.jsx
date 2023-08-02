import React, {useState, useEffect} from "react"
import {storefront, currencyFormat, productsQuery} from "../../utils"

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await storefront(productsQuery);
                setProducts(data.products);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.edges && products.edges.map((item) => {
                            const product = item.node;
                            const image = product.images.nodes[0].transformedSrc;
                            const price = product.priceRange.minVariantPrice.amount;

                            return (
                                <div key={product.handle} className="group relative">
                                    <div
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={image}
                                            alt={product.title}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={`/products/${product.handle}`}>
                                                    <span aria-hidden="true" className="absolute inset-0"/>
                                                    {product.title}
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{currencyFormat(price)}</p>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}