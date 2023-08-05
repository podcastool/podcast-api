import { unstable_cache } from 'next/cache'
import { NextResponse } from 'next/server'
import { parse } from 'rss-to-json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) return new Response('feed url is required', { status: 400 })

  const cacheData = await unstable_cache(
    async () => {
      const result = await parse(url)
      return result.items
    },
    [url],
    {
      revalidate: 86400,
    }
  )()

  return NextResponse.json({ data: cacheData })
}
