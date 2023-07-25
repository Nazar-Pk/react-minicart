export function currencyFormat(amount) {
    if (amount) {
        return  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(amount)
    } else {
        return false;
    }
}


