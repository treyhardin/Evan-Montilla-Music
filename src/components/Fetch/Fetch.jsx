import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-18', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getAlbums() {
  const albums = await client.fetch('*[_type == "album"]')
  return albums
}

export async function getShows() {
  const shows = await client.fetch('*[_type == "show"]')
  return shows
}

export async function getTracks() {
  const tracks = await client.fetch('*[_type == "track"]')
  return tracks
}