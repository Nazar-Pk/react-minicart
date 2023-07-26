import { GraphQLClient } from 'graphql-request'
const storefront = async (query, variables) => {
    const endpoint = `https:/${window.Shopify.shop}/api/2023-07/graphql.json`
    const token = "5a9b4fb7363511440f3db166511c73b4"
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            'X-Shopify-Storefront-Access-Token': token,
        },
    })
    return await graphQLClient.request(query, variables)
}

export default storefront