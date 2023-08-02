export function currencyFormat(amount) {
    if (amount) {
        return  new Intl.NumberFormat(window.Shopify.locale, { style: 'currency', currency: window.Shopify.currency.active, currencyDisplay: 'narrowSymbol'}).format(amount)
    } else {
        return false;
    }
}


