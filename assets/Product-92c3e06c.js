import{r as d,j as t,F as E,a as l,c as I,R as q}from"./client-9d8ae2a5.js";import{g as s,c as f,s as o}from"./currencyFormat-16751f6f.js";function A(){var m,g,p,h,x,y;const[e,b]=d.useState({}),[i,c]=d.useState(1),v=document.querySelector("#product").dataset.handle;d.useEffect(()=>{async function n(){try{const a=await o(k,{handle:v});b(a.product)}catch(a){console.log(a)}}n()},[]);const u=()=>[{quantity:i,merchandiseId:e.variants.edges[0].node.id}],w=()=>{c(i+1)},C=()=>{i>1&&c(i-1)},N=async()=>{let n=sessionStorage.getItem("cartId");if(n){const a={cartId:n,lines:u()},r=await o(S,a);document.dispatchEvent(new CustomEvent("cart:item:add",{detail:r.cartLinesAdd})),document.dispatchEvent(new CustomEvent("cart:update:quantity",{detail:r.cartLinesAdd.cart.totalQuantity}))}else{const a={input:{lines:u()}},r=await o(P,a);n=r.cartCreate.cart.id,sessionStorage.setItem("cartId",n),document.dispatchEvent(new CustomEvent("cart:item:add",{detail:r.cartCreate})),document.dispatchEvent(new CustomEvent("cart:update:quantity",{detail:r.cartCreate.cart.totalQuantity}))}c(1)};return t(E,{children:e&&l("main",{className:"product-container lg:flex lg:items-center lg:gap-x-12 xl:gap-x-24 lg:px-20 xl:px-40 lg:py-20 lg:m-auto lg:mt-2 lg:max-w-8xl",children:[t("h1",{className:"absolute w-1 h-1 overflow-hidden p-0 -m-1",children:"Product page"}),t("div",{className:"destop-preview hidden lg:block",children:t("div",{className:"preview xl:min-w-md max-w-3xl rounded-2xl overflow-hidden",children:t("img",{src:(m=e.images)==null?void 0:m.edges[0].node.transformedSrc,alt:"product-preview"})})}),l("section",{className:"product-details container mx-auto px-6 pt-5 sm:pt-10 lg:pt-5 pb-20 lg:pb-5 lg:pr-0 lg:pl-7 xl:ml-1",children:[t("h3",{className:"product capitalize text-very-dark-blue font-bold text-3xl sm:text-4xl sm:leading-none pb-3",children:e.title}),t("p",{className:"text-dark-grayish-blue pb-6 lg:py-7 lg:leading-6",children:e.description}),l("div",{className:"amount font-bold flex items-center justify-between lg:flex-col lg:items-start mb-6",children:[t("div",{className:"discount-price items-center flex",children:t("div",{className:"price text-3xl",children:f((g=e.variants)==null?void 0:g.edges[0].node.price.amount)})}),((h=(p=e.variants)==null?void 0:p.edges[0].node.compareAtPrice)==null?void 0:h.amount)&&t("div",{className:"original-price text-grayish-blue line-through lg:mt-2",children:f((y=(x=e.variants)==null?void 0:x.edges[0].node.compareAtPrice)==null?void 0:y.amount)})]}),l("div",{className:"sm:flex lg:mt-8 w-full",children:[l("div",{className:"quantity-container w-full bg-light-grayish-blue rounded-lg h-14 mb-4 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:w-1/3",children:[t("button",{onClick:C,className:"text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60",children:"-"}),t("input",{readOnly:!0,className:"quantity focus:outline-none text-dark-blue bg-light-grayish-blue font-bold flex text-center w-full",type:"number",name:"quantity",value:i,"aria-label":"quantity number"}),t("button",{onClick:w,className:"text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60",children:"+"})]}),t("button",{onClick:N,className:"cart w-full h-14 bg-orange rounded-lg lg:rounded-xl mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center lg:w-3/5 hover:opacity-60",children:"Add to cart"})]})]})]})})}const P=s`
  mutation cartCreate($input: CartInput) {
    cartCreate(input: $input) {
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
`,S=s`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
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
`,k=s`
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
`;I.createRoot(document.getElementById("product")).render(t(q.StrictMode,{children:t(A,{})}));
