import{r as c,j as e,a as r,c as n,R as i}from"./client-9d8ae2a5.js";import{c as m,s as u}from"./currencyFormat-16751f6f.js";function g(){const[s,l]=c.useState([]);return c.useEffect(()=>{async function a(){try{const t=await u(p);l(t.products)}catch(t){console.log(t)}}a()},[]),e("div",{className:"bg-white",children:r("div",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",children:[e("h2",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Customers also purchased"}),e("div",{className:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:s.edges&&s.edges.map(a=>{const t=a.node,d=t.images.nodes[0].transformedSrc,o=t.priceRange.minVariantPrice.amount;return r("div",{className:"group relative",children:[e("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e("img",{src:d,alt:t.title,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})}),r("div",{className:"mt-4 flex justify-between",children:[e("div",{children:e("h3",{className:"text-sm text-gray-700",children:r("a",{href:`/products/${t.handle}`,children:[e("span",{"aria-hidden":"true",className:"absolute inset-0"}),t.title]})})}),e("p",{className:"text-sm font-medium text-gray-900",children:m(o)})]})]},t.handle)})})]})})}const p=`
    query Products {
      products(first: 4) {
        edges {
          node {
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              nodes {
                transformedSrc
              }
            }
          }
        }
      }
    }
`;n.createRoot(document.getElementById("featured-products")).render(e(i.StrictMode,{children:e(g,{})}));
