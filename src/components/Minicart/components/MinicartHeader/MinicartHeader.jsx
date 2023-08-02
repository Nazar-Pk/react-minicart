import {XMarkIcon} from "@heroicons/react/24/outline";
import React from "react";
import {ProgressBar} from "../index";

export default function MinicartHeader({
    cart,
    headingText = "Shopping cart",
    showProgressBar,
    shippingThreshold,
    onClose,
    isCartEmpty
}) {
    return (
        <div className="border-b border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">{headingText}</h2>

                <div className="ml-3 flex h-7 items-center">
                    <button
                        type="button"
                        className="-m-2 p-2 text-orange hover:opacity-60"
                        aria-label={"Close panel"}
                        onClick={onClose}
                    >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
            </div>

            {showProgressBar && !isCartEmpty && (
                <ProgressBar cart={cart} shippingThreshold={shippingThreshold}/>
            )}
        </div>
    )
}
