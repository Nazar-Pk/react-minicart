export async function storefront(query, variables = {}) {
    const response = await fetch(" https://utd-theme-content-test.myshopify.com/api/2023-07/graphql.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": "5a9b4fb7363511440f3db166511c73b4"
        },
        body: JSON.stringify({query, variables})
    });

    return response.json();
}