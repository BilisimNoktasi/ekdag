import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, accessToken } from '../env'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: accessToken
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;