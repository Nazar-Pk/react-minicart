import{a as r,j as e,r as n,F as U,c as E,R as q}from"./client-9d8ae2a5.js";import{c as R,g as b,s as x}from"./currencyFormat-16751f6f.js";import{q as F,$ as k,_ as $}from"./XMarkIcon-dc98bf70.js";function L({product:t,onRemove:s,onIncreaseQty:d,onDecreaseQty:c}){return r("li",{className:"flex py-6",children:[e("div",{className:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",children:e("img",{src:t.merchandise.image.url,alt:t.merchandise.product.title,className:"h-full w-full object-cover object-center"})}),r("div",{className:"ml-4 flex flex-1 flex-col gap-y-4",children:[e("div",{children:r("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e("h3",{children:e("a",{className:"hover:opacity-60",href:`/products/${t.merchandise.product.handle}`,children:t.merchandise.product.title})}),e("p",{className:"ml-4",children:R(t.merchandise.price.amount*t.quantity)})]})}),r("div",{className:"flex mt-auto items-center justify-between text-sm",children:[r("div",{className:"w-full h-10 flex items-center justify-between px-2 bg-light-grayish-blue rounded-lg font-bold lg:w-1/2",children:[e("button",{onClick:c,className:"text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60",children:"-"}),e("input",{readOnly:!0,className:"quantity focus:outline-none text-dark-blue bg-light-grayish-blue font-bold flex text-center w-full",type:"number",name:"quantity",value:t.quantity,"aria-label":"quantity number"}),e("button",{onClick:d,className:"text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60",children:"+"})]}),e("div",{className:"flex",children:e("button",{onClick:s,type:"button",className:"font-medium text-orange hover:opacity-60",children:"Remove"})})]})]})]},t.id)}function T({headingText:t="Shopping cart",onClose:s}){return r("div",{className:"border-b border-gray-200 px-4 py-6 sm:px-6 flex items-start justify-between",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:t}),e("div",{className:"ml-3 flex h-7 items-center",children:e("button",{type:"button",className:"-m-2 p-2 text-orange hover:opacity-60","aria-label":"Close panel",onClick:s,children:e(F,{className:"h-6 w-6","aria-hidden":"true"})})})]})}function M({showNote:t=!1,cartId:s,checkoutUrl:d,handleClose:c}){const[i,u]=n.useState(""),[m,v]=n.useState(!1),[g,y]=n.useState(!1),[h,p]=n.useState(d),N=n.useRef(null);return r("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6",children:[r("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e("p",{children:"Subtotal"}),e("p",{children:"$262.00"})]}),e("p",{className:"mt-0.5 text-sm text-gray-500",children:"Shipping and taxes calculated at checkout."}),t&&r(U,{children:[e("div",{className:"mt-2",children:r("button",{className:"border-b-2 flex items-center hover:opacity-90",onClick:()=>v(!m),children:["Add Note",e("span",{className:"text-orange height-4 w-7 text-2xl font-bold",children:m?"-":"+"})]})}),m&&e("div",{className:"mt-2",children:e("textarea",{ref:N,onInput:f=>{u(f.target.value)},className:"w-full h-15 flex items-center justify-between bg-light-grayish-blue rounded-lg p-4 resize-none",name:"note",id:"note",placeholder:"Add Note"})})]}),e("div",{className:"mt-6",children:e("a",{onClick:async f=>{if(i.length){f.preventDefault(),y(!0);const{cartNoteUpdate:w}=await x(D,{cartId:s,note:i});p(w.cart.checkoutUrl),window.location.href=h}},href:h,className:"flex items-center justify-center rounded-md border border-transparent bg-orange px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-60",children:g?"Loading ...":"Checkout"})}),r("div",{className:"mt-6 flex gap-x-2 justify-center text-center text-sm text-gray-500",children:[e("span",{children:"or"}),r("button",{type:"button",className:"font-medium text-orange hover:opacity-60",onClick:c,children:["Continue Shopping",e("span",{"aria-hidden":"true",children:" →"})]})]})]})}const D=b`
  mutation cartNoteUpdate($cartId: ID!, $note:  String) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      checkoutUrl
    }
  }
}
`;function O({children:t,isOpen:s,setOpen:d}){return e(k.Root,{show:s,as:n.Fragment,children:r($,{as:"div",className:"relative z-10",onClose:d,children:[e(k.Child,{as:n.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(k.Child,{as:n.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e($.Panel,{className:"pointer-events-auto w-screen max-w-md",children:e("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:t})})})})})})]})})}function Q(){const[t,s]=n.useState({}),[d,c]=n.useState(!1),[i,u]=n.useState({}),[m,v]=n.useState(!0),[g,y]=n.useState([]),h=sessionStorage.getItem("cartId"),p=()=>{c(!1)},N=async({cart:a,userErrors:o})=>{o.length&&y(o),u(a),c(!0)},S=async(a,o)=>{const l={cartId:a,lineIds:[o]},{cartLinesRemove:C}=await x(P,l);u(C.cart)},f=async(a,o,l)=>{const C={cartId:a,lines:[{id:o,quantity:l}]},{cartLinesUpdate:I}=await x(V,C);u(I.cart),I.userErrors.length&&y(I.userErrors)};async function w(){if(h)try{const{cart:a}=await x(A,{id:h});u(a)}catch(a){console.log(a)}}function j(){let a=JSON.parse(document.getElementById("minicartConfig").textContent);s(a)}return n.useEffect(()=>{j(),w(),document.addEventListener("cart:action:open",()=>c(!0)),document.addEventListener("cart:item:add",a=>N(a.detail))},[]),n.useEffect(()=>{v(Object.keys(i).length===0||i.totalQuantity===0),document.dispatchEvent(new CustomEvent("cart:update:quantity",{detail:i.totalQuantity}))},[i]),n.useEffect(()=>{setTimeout(()=>{y([])},5e3)},[g]),r(O,{isOpen:d,setOpen:c,children:[e(T,{headingText:t.heading,onClose:p}),r("div",{className:"flex-1 overflow-y-auto px-4 py-6 sm:px-6",children:[g.length>0&&e("ul",{className:"mb-6 w-full flex items-center justify-between p-4 bg-light-grayish-blue rounded-lg font-bold",children:g.map((a,o)=>e("li",{className:"text-red-500",children:a.message},o))}),m?e("div",{className:"flex flex-1 justify-center items-center h-full",children:e("h2",{className:"text-lg font-medium text-gray-900 text-center",children:t.emptyCartText})}):e("ul",{role:"list",className:"-my-6 divide-y divide-gray-200",children:i.lines.edges.map((a,o)=>{const l=a.node;return e(L,{product:l,onRemove:()=>S(i.id,l.id),onIncreaseQty:()=>f(i.id,l.id,l.quantity+1),onDecreaseQty:()=>f(i.id,l.id,l.quantity-1)},o)})})]}),!m&&e(M,{showNote:t.showNote,cartId:h,checkoutUrl:i.checkoutUrl,handleClose:p})]})}const A=b`
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
`,P=b`
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
`,V=b`
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
`;E.createRoot(document.getElementById("minicart")).render(e(q.StrictMode,{children:e(Q,{})}));
