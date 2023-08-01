import React, {useState} from "react";

export default function MinicartFooter({checkoutUrl, handleClose}) {
    const [note, setNote] = useState(false);
    const [noteOpen, setNoteOpen] = useState(false);

    return (
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>


            <div className="mt-2">
                <button className={"border-b-2 flex items-center hover:opacity-90"} onClick={() => setNoteOpen(!noteOpen)}>
                    Add Note
                    <span
                        className="text-orange height-4 w-7 text-2xl font-bold">
                           {!noteOpen ? "+" : "-"}
                    </span>
                </button>
            </div>

            {noteOpen && (
                <div className={"mt-2"}>
                        <textarea
                            className={"w-full h-15 flex items-center justify-between bg-light-grayish-blue rounded-lg p-4 resize-none"}
                            name="note"
                            id="note"
                            placeholder="Add Note"
                        />
                </div>
            )}

            <div className="mt-6">
                <a
                    href={checkoutUrl}
                    className="flex items-center justify-center rounded-md border border-transparent bg-orange px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-60"
                >
                    Checkout
                </a>
            </div>
            <div className="mt-6 flex gap-x-2 justify-center text-center text-sm text-gray-500">
                <span>or</span>

                <button
                    type="button"
                    className="font-medium text-orange hover:opacity-60"
                    onClick={handleClose}
                >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                </button>
            </div>
        </div>
    )
}
