import{j as e,r as n,a as r,F as w,u as M,g as O,b as P,d as T,c as L,R as U}from"./graphql-6eff4ca8.js";import{c as E,s as C}from"./storefront-af69d608.js";import{$ as k,_ as F,q as A}from"./XMarkIcon-b62fa124.js";function B({children:a,isOpen:l,setOpen:o}){return e(k.Root,{show:l,as:n.Fragment,children:r(F,{as:"div",className:"relative z-10",onClose:o,children:[e(k.Child,{as:n.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(k.Child,{as:n.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e(F.Panel,{className:"pointer-events-auto w-screen max-w-md",children:e("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:a})})})})})})]})})}function Q({cart:a,headingText:l="Shopping cart",showProgressBar:o,shippingThreshold:i,onClose:t,isCartEmpty:c}){return r("div",{className:"border-b border-gray-200 px-4 py-6 sm:px-6",children:[r("div",{className:"flex items-start justify-between",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:l}),e("div",{className:"ml-3 flex h-7 items-center",children:e("button",{type:"button",className:"-m-2 p-2 text-orange hover:opacity-60","aria-label":"Close panel",onClick:t,children:e(A,{className:"h-6 w-6","aria-hidden":"true"})})})]}),o&&!c&&e(z,{cart:a,shippingThreshold:i})]})}function D({cart:a,showNote:l=!1,cartId:o,checkoutUrl:i,handleClose:t}){const[c,h]=n.useState(""),[f,u]=n.useState(!1),[g,y]=n.useState(!1),[x,p]=n.useState(i),v=n.useRef(null),S=async b=>{if(c.length){b.preventDefault(),y(!0);const{cartNoteUpdate:N}=await C(M,{cartId:o,note:c});p(N.cart.checkoutUrl),window.location.href=x}};return r("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6",children:[r("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e("p",{children:"Subtotal"}),e("p",{children:E(a.estimatedCost.totalAmount.amount)})]}),e("p",{className:"mt-0.5 text-sm text-gray-500",children:"Shipping and taxes calculated at checkout."}),l&&r(w,{children:[e("div",{className:"mt-2",children:r("button",{className:"border-b-2 flex items-center hover:opacity-90",onClick:()=>u(!f),children:["Add Note",e("span",{className:"text-orange height-4 w-7 text-2xl font-bold",children:f?"-":"+"})]})}),f&&e("div",{className:"mt-2",children:e("textarea",{ref:v,onInput:b=>{h(b.target.value)},className:"w-full h-15 flex items-center justify-between bg-light-grayish-blue rounded-lg p-4 resize-none",name:"note",id:"note",placeholder:"Add Note"})})]}),e("div",{className:"mt-6",children:e("a",{onClick:S,href:x,className:"flex items-center justify-center rounded-md border border-transparent bg-orange px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-60",children:g?"Loading ...":"Checkout"})}),r("div",{className:"mt-6 flex gap-x-2 justify-center text-center text-sm text-gray-500",children:[e("span",{children:"or"}),r("button",{type:"button",className:"font-medium text-orange hover:opacity-60",onClick:t,children:["Continue Shopping",e("span",{"aria-hidden":"true",children:" →"})]})]})]})}function $({product:a,onRemove:l,onIncreaseQty:o,onDecreaseQty:i,loading:t}){return r("li",{className:"flex py-6",children:[e("div",{className:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",children:e("img",{src:a.merchandise.image.url,alt:a.merchandise.product.title,className:"h-full w-full object-cover object-center"})}),r("div",{className:"ml-4 flex flex-1 flex-col gap-y-4",children:[e("div",{children:r("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e("h3",{children:e("a",{className:"hover:opacity-60",href:`/products/${a.merchandise.product.handle}`,children:a.merchandise.product.title})}),e("p",{className:"ml-4",children:E(a.merchandise.price.amount*a.quantity)})]})}),r("div",{className:"flex mt-auto items-center justify-between text-sm",children:[r("div",{className:"w-full h-10 flex items-center justify-between px-2 bg-light-grayish-blue rounded-lg font-bold lg:w-1/2",children:[e("button",{onClick:i,disabled:t,className:"text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60 disabled:text-gray-400",children:"-"}),e("input",{readOnly:!0,className:"quantity focus:outline-none text-dark-blue bg-light-grayish-blue font-bold flex text-center w-full",type:"number",name:"quantity",value:a.quantity,"aria-label":"quantity number"}),e("button",{onClick:o,className:"text-orange w-7 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60 disabled:text-gray-400",disabled:t,children:"+"})]}),e("div",{className:"flex",children:e("button",{onClick:l,type:"button",className:"font-medium text-orange hover:opacity-60 disabled:text-gray-400",disabled:t,children:"Remove"})})]})]})]},a.id)}function z({cart:a,shippingThreshold:l}){const[o,i]=n.useState(0),t=a.estimatedCost.totalAmount.amount,[c,h]=n.useState(0),f=(u,g)=>{let y=u*100/g;return y>100?100:y};return n.useEffect(()=>{t<l&&i(l-t),h(f(t,l))},[t]),e(w,{children:r("div",{className:"mt-4",children:[e("p",{className:"mb-2 text-center",children:t<l?r(w,{children:["You're ",e("b",{children:E(o)})," away from free shipping!"]}):e(w,{children:"Congratulations! You have received free shipping!"})}),e("div",{className:"w-full bg-light-grayish-blue rounded-full h-2.5",children:e("div",{className:"bg-orange h-2.5 rounded-full transition-all",style:{width:c+"%"}})})]})})}function J(){const[a,l]=n.useState({}),[o,i]=n.useState(!1),[t,c]=n.useState({}),[h,f]=n.useState(!0),[u,g]=n.useState([]),[y,x]=n.useState(!1),p=sessionStorage.getItem("cartId"),v=()=>{i(!1)},S=async({cart:s,userErrors:d})=>{d.length&&g(d),c(s),i(!0)},b=async(s,d)=>{const m={cartId:s,lineIds:[d]};x(!0);const{cartLinesRemove:I}=await C(P,m);c(I.cart),x(!1)},N=async(s,d,m)=>{const I={cartId:s,lines:[{id:d,quantity:m}]};x(!0);const{cartLinesUpdate:j}=await C(T,I);c(j.cart),j.userErrors.length&&g(j.userErrors),x(!1)};async function R(){if(p)try{const{cart:s}=await C(O,{id:p});c(s)}catch(s){console.log(s)}}function q(){let s=JSON.parse(document.getElementById("minicartConfig").textContent);l(s)}return n.useEffect(()=>{q(),R(),document.addEventListener("cart:action:open",()=>i(!0)),document.addEventListener("cart:item:add",s=>S(s.detail))},[]),n.useEffect(()=>{f(Object.keys(t).length===0||t.totalQuantity===0),document.dispatchEvent(new CustomEvent("cart:update:quantity",{detail:t.totalQuantity}))},[t]),n.useEffect(()=>{u.length&&setTimeout(()=>{g([])},1e4)},[u]),r(B,{isOpen:o,setOpen:i,children:[e(Q,{cart:t,headingText:a.heading,shippingThreshold:a.shippingThreshold,showProgressBar:a.showProgressBar,isCartEmpty:h,onClose:v}),r("div",{className:"flex-1 overflow-y-auto px-4 py-6 sm:px-6",children:[u.length>0&&e("ul",{className:"mb-6 w-full flex items-center justify-between p-4 bg-light-grayish-blue rounded-lg font-bold",children:u.map((s,d)=>e("li",{className:"text-red-500",children:s.message},d))}),h?e("div",{className:"flex flex-1 justify-center items-center h-full",children:e("h2",{className:"text-lg font-medium text-gray-900 text-center",children:a.emptyCartText})}):e("ul",{role:"list",className:"-my-6 divide-y divide-gray-200",children:t.lines.edges.map((s,d)=>{const m=s.node;return e($,{product:m,onRemove:()=>b(t.id,m.id),onIncreaseQty:()=>N(t.id,m.id,m.quantity+1),onDecreaseQty:()=>N(t.id,m.id,m.quantity-1),loading:y},d)})})]}),!h&&e(D,{cart:t,showNote:a.showNote,cartId:p,checkoutUrl:t.checkoutUrl,handleClose:v})]})}L.createRoot(document.getElementById("minicart")).render(e(U.StrictMode,{children:e(J,{})}));
