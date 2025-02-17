import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'bc0n4wex', // Replace with your Sanity project ID
  dataset: 'element',       // Dataset nam
  apiVersion: '2024-11-26',    // Latest API version
  useCdn: true,                // Set to `false` for fresh data
  token: "skcgqDBEE7rJ9RshRqGf0QqBe8CrUVb8j6fexNDxkyE7DbVhs4bypErIIEDAQZP9gJlJlbL9MftRQYGTTXWqAALtIonmxkUnDUkqLjr5e5Qs0OsR4zGwGmTRidXmb26Jd06OqCVb8rmXEZppa06HsAbErXlat0X0ktdaQKqgr2g5s7lZTdpv"
});
