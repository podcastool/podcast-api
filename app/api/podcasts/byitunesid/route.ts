import { NextResponse } from 'next/server'
import PodcastIndexClient from 'podcast-index-client'

const client = new PodcastIndexClient({
  key: process.env.PODCAST_INDEX_API_KEY,
  secret: process.env.PODCAST_INDEX_API_SECRET,
  disableAnalytics: true,
})

export const revalidate = 86400

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) return new Response('id is required', { status: 400 })

  const { feed } = await client.podcastByItunesId(Number(id))

  return NextResponse.json({ data: feed })
}
