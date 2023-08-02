import React, {useEffect, useState} from "react";
import {currencyFormat} from "../../../../utils";

export default function ProgressBar({cart, shippingThreshold}) {
    const [threshold, setThreshold] = useState(0);
    const total = cart.estimatedCost.totalAmount.amount;
    const [thresholdPercent, setThresholdPercent] = useState(0);

    const calcPercent = (total, shippingThreshold) => {
        let percent = total * 100 / shippingThreshold;

        return percent > 100 ? 100 : percent;
    }

    useEffect(() => {
        if (total < shippingThreshold) {
            setThreshold(shippingThreshold - total);
        }

        setThresholdPercent(calcPercent(total, shippingThreshold));
    }, [total]);

    return (
        <>
            <div className="mt-4">
                <p className="mb-2 text-center">
                    {total < shippingThreshold ? (
                        <>
                            You're <b>{currencyFormat(threshold)}</b> away from free shipping!
                        </>
                    ) : (
                        <>
                            Congratulations! You have received free shipping!
                        </>
                    )}
                </p>
                <div className="w-full bg-light-grayish-blue rounded-full h-2.5">
                    <div className="bg-orange h-2.5 rounded-full transition-all"
                         style={{width: thresholdPercent + "%"}}/>
                </div>
            </div>
        </>
    )
}
