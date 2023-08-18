import {createClient} from '@sanity/client'

// export const client = createClient({
//   projectId: null,
//   dataset: 'production',
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: '2023-08-18', // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// })

// // uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getAlbums() {
//   const posts = await client.fetch('*[_type == "musicAlbum"]')
//   return posts
// }