import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
     projectId: 't1qshpu7',
    dataset: 'production',
    apiVersion: '2022-05-17',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);