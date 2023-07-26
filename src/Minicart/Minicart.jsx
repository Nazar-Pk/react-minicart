import React, {useEffect, useState} from 'react'
import MinicartProduct from "./components/MinicartProduct/MinicartProduct";
import MinicartHeader from "./components/MinicartHeader/MinicartHeader";
import MinicartFooter from "./components/MinicartFooter/MinicartFooter";
import Drawer from "../Drawer/Drawer";
import {gql} from "graphql-request";
import storefront from "../utils/storefront";

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    }
]

export default function Minicart() {
    const [open, setOpen] = useState(false);
    const [cartId, setCartId] = useState(sessionStorage.getItem('cartId'));

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        document.addEventListener("cart:action:open", () => setOpen(true));
        document.addEventListener("cart:item:add", (event) => setOpen(true));

        async function fetchData() {
            try {
                const data = await storefront(getCartQuery, {id: cartId})
                console.log(data,"data")
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();


    }, []);

    return (
        <Drawer isOpen={open} setOpen={setOpen}>
            <MinicartHeader onClose={handleClose} />

            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                                <MinicartProduct product={product} key={product.id} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <MinicartFooter />
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
                priceV2 {
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
      checkoutUrl
    }
  }
`