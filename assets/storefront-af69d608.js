import{G as o}from"./graphql-6eff4ca8.js";function a(e){return e?new Intl.NumberFormat(window.Shopify.locale,{style:"currency",currency:window.Shopify.currency.active,currencyDisplay:"narrowSymbol"}).format(e):!1}const i=async(e,r)=>{const t="https://utd-theme-content-test.myshopify.com/api/2023-07/graphql.json",n="5a9b4fb7363511440f3db166511c73b4";return await new o(t,{headers:{"X-Shopify-Storefront-Access-Token":n}}).request(e,r)};export{a as c,i as s};
