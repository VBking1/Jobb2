// sanityClient.js

import imageUrlBuilder from '@sanity/image-url';
import client from './sanityClient'; // Import your Sanity client configuration here

// Initialize the image url builder with your Sanity client
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

