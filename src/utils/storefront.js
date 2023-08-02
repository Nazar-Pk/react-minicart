import {GraphQLClient} from 'graphql-request'

export const storefront = async (query, variables) => {
    const endpoint = `https://utd-theme-content-test.myshopify.com/api/2023-07/graphql.json`
    const token = "5a9b4fb7363511440f3db166511c73b4"
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            'X-Shopify-Storefront-Access-Token': token,
        },
    })
    return await graphQLClient.request(query, variables)
}