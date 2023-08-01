import React, {useEffect, useState} from 'react'
import MinicartProduct from "./components/MinicartProduct/MinicartProduct";
import MinicartHeader from "./components/MinicartHeader/MinicartHeader";
import MinicartFooter from "./components/MinicartFooter/MinicartFooter";
import Drawer from "../Drawer/Drawer";
import {gql} from "graphql-request";
import storefront from "../utils/storefront";

export default function Minicart() {
    const [open, setOpen] = useState(false);
    const [cart, setCart] = useState({});
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const [errors,setErrors] = useState([]);

    const cartId = sessionStorage.getItem('cartId');

    const handleClose = () => {
        setOpen(false);
    }

    const handleRemoveItem = async (cartId, lineId) => {
        const variables = {
            cartId,
            lineIds: [lineId]
        }

        const {cartLinesRemove} = await storefront(removeItemMutation, variables);

        setCart(cartLinesRemove.cart);
    }

    const handleUpdateItem = async (cartId, lineId, quantity) => {
        const variables = {
            cartId,
            lines: [
                {
                    id: lineId,
                    quantity
                }
            ]
        }

        const {cartLinesUpdate,userErrors} = await storefront(updateItemMutation, variables);

        setCart(cartLinesUpdate.cart);

        if(cartLinesUpdate.userErrors.length) setErrors(userErrors);
    }

    async function getCart() {
        if(!cartId) return;

        try {
            const {cart} = await storefront(getCartQuery, {id: cartId});
            setCart(cart);

        } catch (err) {
            console.log(err);
        }
    }

    const onItemAdd = async ({cart,userErrors}) => {
        if(userErrors.length) setErrors(userErrors);
        setCart(cart);
        setOpen(true);
    }

    useEffect(() => {
        getCart();

        document.addEventListener("cart:action:open", () => setOpen(true));
        document.addEventListener("cart:item:add", (event) => onItemAdd(event.detail));
    }, []);

    useEffect(() => {
        setIsCartEmpty(Object.keys(cart).length === 0 || cart.totalQuantity === 0);

        document.dispatchEvent(new CustomEvent("cart:update:quantity", {
            detail: cart.totalQuantity
        }));
    }, [cart]);

    useEffect(() => {
        setTimeout(() => {
            setErrors([]);
        },5000);
    }, [errors]);

    return (
        <Drawer isOpen={open} setOpen={setOpen}>
            <MinicartHeader onClose={handleClose}/>
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    {errors.length > 0 && (
                        <ul className={"mb-6 w-full flex items-center justify-between p-4 bg-light-grayish-blue rounded-lg font-bold"}>
                            {errors.map((error,index) => {
                                return (
                                    <li key={index} className={"text-red-500"}>{error.message}</li>
                                )
                            })}
                        </ul>
                    )}
                     {!isCartEmpty ? (
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.lines.edges.map((item,index) => {
                                const lineItem = item.node;

                                return (
                                    <MinicartProduct
                                        key={index}
                                        product={lineItem}
                                        onRemove={() => handleRemoveItem(cart.id, lineItem.id)}
                                        onIncreaseQty={() => handleUpdateItem(cart.id, lineItem.id,lineItem.quantity + 1)}
                                        onDecreaseQty={() => handleUpdateItem(cart.id, lineItem.id,lineItem.quantity - 1)}
                                    />
                                )
                            })}
                        </ul>
                    ) : (
                        <div className={"flex flex-1 justify-center items-center h-full"}>
                            <h2 className={"text-lg font-medium text-gray-900 text-center"}>Your cart is empty!</h2>
                        </div>
                    )}
                </div>
            <MinicartFooter checkoutUrl={cart.checkoutUrl} handleClose={handleClose}/>
        </Drawer>
    )
}

const getCartQuery = gql`
  query getCart($id: ID!) {
    cart(id: $id) {
      id
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                  altText
                  width
                  height
                }
                product {
                  id
                  title
                  handle
                }
              }
            }
          }
        }
      }
      estimatedCost {
        totalAmount {
          amount
          currencyCode
        }
      }
      totalQuantity
      checkoutUrl
    }
  }
`

const removeItemMutation = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                      width
                      height
                    }
                    product {
                      id
                      title
                      handle
                    }
                  }
                }
              }
            }
          }
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
          }
          totalQuantity
          checkoutUrl
        }
    }
  }
`

const updateItemMutation = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
          id
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                      width
                      height
                    }
                    product {
                      id
                      title
                      handle
                    }
                  }
                }
              }
            }
          }
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
          }
          totalQuantity
          checkoutUrl
        }
    userErrors {
      field
      message
    }
  }
}
`