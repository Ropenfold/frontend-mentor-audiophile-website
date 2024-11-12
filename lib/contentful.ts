import { GraphQLClient, RequestDocument, Variables } from "graphql-request";

const SPACE_ID = process.env.NEXT_PUBLIC_SPACE_ID as string;
const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'master';
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API as string;

console.log('SpaceID', SPACE_ID);
console.log('ENVIRONMENT', ENVIRONMENT);
console.log('ACCESS_TOKEN', ACCESS_TOKEN);

if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Contentful SPACE_ID and ACCESS_TOKEN must be provided");
  }

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`

export const contentfulClient = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
})

export async function fetchContentful<T>(
    query: RequestDocument,
    variables: Variables ={}
): Promise<T> {
    return await contentfulClient.request<T>(query, variables);
}