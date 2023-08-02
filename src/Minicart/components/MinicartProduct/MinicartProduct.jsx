import {currencyFormat} from "../../../utils/currencyFormat"
import React from "react";

export default function MinicartProduct({product,onRemove,onIncreaseQty, onDecreaseQty,loading}) {
    return (
        <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={product.merchandise.image.url}
                    alt={product.merchandise.product.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col gap-y-4">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a className={"hover:opacity-60"} href={`/products/${product.merchandise.product.handle}`}>{product.merchandise.product.title}</a>
                        </h3>
                        <p className="ml-4">{currencyFormat(product.merchandise.price.amount * product.quantity)}</p>
                    </div>
                </div>

                <div className="flex mt-auto items-center justify-between text-sm">
                    <div className="w-full h-10 flex items-center justify-between px-2 bg-light-grayish-blue rounded-lg font-bold lg:w-1/2">
                        <button
                            onClick={onDecreaseQty}
                            disabled={loading}
                            className="text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60 disabled:text-gray-400"
                        >
                            -
                        </button>

                        <input readOnly={true}
                               className="quantity focus:outline-none text-dark-blue bg-light-grayish-blue font-bold flex text-center w-full"
                               type="number" name="quantity"
                               value={product.quantity}
                               aria-label="quantity number"
                        />

                        <button
                            onClick={onIncreaseQty}
                            className="text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60 disabled:text-gray-400"
                            disabled={loading}
                        >
                            +
                        </button>
                    </div>

                    <div className="flex">
                        <button
                            onClick={onRemove}
                            type="button"
                            className="font-medium text-orange hover:opacity-60 disabled:text-gray-400"
                            disabled={loading}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}
