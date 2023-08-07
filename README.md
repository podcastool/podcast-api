# Podcast API

## API

### `api/podcasts/byfeedurl?url={feed_url}`

Get podcast information by feed url.

**Example:** https://podcast-index-api.netlify.app/api/podcasts/byfeedurl?url=https://lexfridman.com/feed/podcast

```json
{
    "data": {
        "id": 745287,
        "podcastGuid": "7eeae9d1-141e-5133-9e8f-6c1da695e40c",
        "medium": "podcast",
        "title": "Lex Fridman Podcast",
        "url": "https://lexfridman.com/feed/podcast/",
        "originalUrl": "https://feeds.feedburner.com/lexfridman",
        "link": "https://lexfridman.com/",
        "description": "Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Lex is an AI researcher at MIT and beyond.",
        "author": "Lex Fridman",
        "ownerName": "Lex Fridman",
        "image": "https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png",
        "artwork": "https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png",
        "lastUpdateTime": 1690915839,
        "lastCrawlTime": 1691380563,
        "lastParseTime": 1691380587,
        "lastGoodHttpStatusTime": 1691380563,
        "lastHttpStatus": 200,
        "contentType": "application/rss+xml; charset=UTF-8",
        "itunesId": 1434243584,
        "itunesType": "episodic",
        "generator": "Blubrry PowerPress/10.6.1",
        "language": "en-US",
        "explicit": false,
        "type": 0,
        "dead": 0,
        "chash": "0de5a893bc37a1383d72dcb19e0c4d45",
        "episodeCount": 393,
        "crawlErrors": 0,
        "parseErrors": 0,
        "categories": {
            "67": "Science",
            "77": "Society",
            "78": "Culture",
            "82": "Philosophy",
            "102": "Technology"
        },
        "locked": 0,
        "imageUrlHash": 3777542340
    }
}
```

### `api/podcasts/byitunesid?id={itunes_id}`

Get podcast information by itunes id.

**Example:** https://podcast-index-api.netlify.app/api/podcasts/byitunesid?id=1434243584

```json
{
    "data": {
        "id": 745287,
        "podcastGuid": "7eeae9d1-141e-5133-9e8f-6c1da695e40c",
        "medium": "podcast",
        "title": "Lex Fridman Podcast",
        "url": "https://lexfridman.com/feed/podcast/",
        "originalUrl": "https://feeds.feedburner.com/lexfridman",
        "link": "https://lexfridman.com/",
        "description": "Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Lex is an AI researcher at MIT and beyond.",
        "author": "Lex Fridman",
        "ownerName": "Lex Fridman",
        "image": "https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png",
        "artwork": "https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png",
        "lastUpdateTime": 1690915839,
        "lastCrawlTime": 1691380563,
        "lastParseTime": 1691380587,
        "lastGoodHttpStatusTime": 1691380563,
        "lastHttpStatus": 200,
        "contentType": "application/rss+xml; charset=UTF-8",
        "itunesId": 1434243584,
        "itunesType": "episodic",
        "generator": "Blubrry PowerPress/10.6.1",
        "language": "en-US",
        "explicit": false,
        "type": 0,
        "dead": 0,
        "chash": "0de5a893bc37a1383d72dcb19e0c4d45",
        "episodeCount": 393,
        "crawlErrors": 0,
        "parseErrors": 0,
        "categories": {
            "67": "Science",
            "77": "Society",
            "78": "Culture",
            "82": "Philosophy",
            "102": "Technology"
        },
        "locked": 0,
        "imageUrlHash": 3777542340
    }
}
```

### `api/episodes/byfeedurl?url={feed_url}`

Get podcast episodes information by feed url.

**Example:** https://podcast-index-api.netlify.app/api/episodes/byfeedurl?url=https://lexfridman.com/feed/podcast

```json
{
    "data": [
        {
            "id": "https://lexfridman.com/?p=5618",
            "title": "#392 – Joscha Bach: Life, Intelligence, Consciousness, AI &#038; the Future of Humans",
            "description": "Joscha Bach is a cognitive scientist, AI researcher, and philosopher. Please support this podcast by checking out our sponsors:\n- Numerai: https://numer.ai/lex\n- Eight Sleep: https://www.eightsleep.com/lex to get special savings\n- MasterClass: https://masterclass.com/lex to get 15% off\n- AG1: https://drinkag1.com/lex to get 1 month supply of fish oil\n\nTranscript: https://lexfridman.com/joscha-bach-3-transcript\n\nEPISODE LINKS:\nJoscha&#039;s Twitter: https://twitter.com/Plinz\nJoscha&#039;s Website: http://bach.ai\nJoscha&#039;s Substack: https://substack.com/@joscha\n\nPODCAST INFO:\nPodcast website: https://lexfridman.com/podcast\nApple Podcasts: https://apple.co/2lwqZIr\nSpotify: https://spoti.fi/2nEwCF8\nRSS: https://lexfridman.com/feed/podcast/\nYouTube Full Episodes: https://youtube.com/lexfridman\nYouTube Clips: https://youtube.com/lexclips\n\nSUPPORT & CONNECT:\n- Check out the sponsors above, it&#039;s the best way to support this podcast\n- Support on Patreon: https://www.patreon.com/lexfridman\n- Twitter: https://twitter.com/lexfridman\n- Instagram: https://www.instagram.com/lexfridman\n- LinkedIn: https://www.linkedin.com/in/lexfridman\n- Facebook: https://www.facebook.com/lexfridman\n- Medium: https://medium.com/@lexfridman\n\nOUTLINE:\nHere&#039;s the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.\n(00:00) - Introduction\n(06:26) - Stages of life\n(18:48) - Identity\n(25:24) - Enlightenment\n(31:55) - Adaptive Resonance Theory\n(38:42) - Panpsychism\n(48:42) - How to think\n(56:36) - Plants communication\n(1:14:31) - Fame\n(1:40:09) - Happiness\n(1:47:26) - Artificial consciousness\n(1:59:35) - Suffering\n(2:04:19) - Eliezer Yudkowsky\n(2:11:55) - e/acc (Effective Accelerationism)\n(2:17:33) - Mind uploading\n(2:28:22) - Vision Pro\n(2:32:36) - Open source AI\n(2:45:29) - Twitter\n(2:52:44) - Advice for young people\n(2:55:40) - Meaning of life",
            "link": "https://lexfridman.com/joscha-bach-3/?utm_source=rss&#038;utm_medium=rss&#038;utm_campaign=joscha-bach-3",
            "published": 1690915748000,
            "created": 1690915748000,
            "category": "ai",
            "content": "<p>Joscha Bach is a cognitive scientist, AI researcher, and philosopher. Please support this podcast by checking out our sponsors:<br />\n&#8211; <b>Numerai</b>: <a href=\"https://numer.ai/lex\">https://numer.ai/lex</a><br />\n&#8211; <b>Eight Sleep</b>: <a href=\"https://www.eightsleep.com/lex\">https://www.eightsleep.com/lex</a> to get special savings<br />\n&#8211; <b>MasterClass</b>: <a href=\"https://masterclass.com/lex\">https://masterclass.com/lex</a> to get 15% off<br />\n&#8211; <b>AG1</b>: <a href=\"https://drinkag1.com/lex\">https://drinkag1.com/lex</a> to get 1 month supply of fish oil</p>\n<p>Transcript: <a href=\"https://lexfridman.com/joscha-bach-3-transcript\">https://lexfridman.com/joscha-bach-3-transcript</a></p>\n<p><b>EPISODE LINKS:</b><br />\nJoscha&#8217;s Twitter: <a href=\"https://twitter.com/Plinz\">https://twitter.com/Plinz</a><br />\nJoscha&#8217;s Website: <a href=\"http://bach.ai\">http://bach.ai</a><br />\nJoscha&#8217;s Substack: <a href=\"https://substack.com/@joscha\">https://substack.com/@joscha</a></p>\n<p><b>PODCAST INFO:</b><br />\nPodcast website: <a href=\"https://lexfridman.com/podcast\">https://lexfridman.com/podcast</a><br />\nApple Podcasts: <a href=\"https://apple.co/2lwqZIr\">https://apple.co/2lwqZIr</a><br />\nSpotify: <a href=\"https://spoti.fi/2nEwCF8\">https://spoti.fi/2nEwCF8</a><br />\nRSS: <a href=\"https://lexfridman.com/feed/podcast/\">https://lexfridman.com/feed/podcast/</a><br />\nYouTube Full Episodes: <a href=\"https://youtube.com/lexfridman\">https://youtube.com/lexfridman</a><br />\nYouTube Clips: <a href=\"https://youtube.com/lexclips\">https://youtube.com/lexclips</a></p>\n<p><b>SUPPORT & CONNECT:</b><br />\n&#8211; Check out the sponsors above, it&#8217;s the best way to support this podcast<br />\n&#8211; Support on Patreon: <a href=\"https://www.patreon.com/lexfridman\">https://www.patreon.com/lexfridman</a><br />\n&#8211; Twitter: <a href=\"https://twitter.com/lexfridman\">https://twitter.com/lexfridman</a><br />\n&#8211; Instagram: <a href=\"https://www.instagram.com/lexfridman\">https://www.instagram.com/lexfridman</a><br />\n&#8211; LinkedIn: <a href=\"https://www.linkedin.com/in/lexfridman\">https://www.linkedin.com/in/lexfridman</a><br />\n&#8211; Facebook: <a href=\"https://www.facebook.com/lexfridman\">https://www.facebook.com/lexfridman</a><br />\n&#8211; Medium: <a href=\"https://medium.com/@lexfridman\">https://medium.com/@lexfridman</a></p>\n<p><b>OUTLINE:</b><br />\nHere&#8217;s the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.<br />\n(00:00) &#8211; Introduction<br />\n(06:26) &#8211; Stages of life<br />\n(18:48) &#8211; Identity<br />\n(25:24) &#8211; Enlightenment<br />\n(31:55) &#8211; Adaptive Resonance Theory<br />\n(38:42) &#8211; Panpsychism<br />\n(48:42) &#8211; How to think<br />\n(56:36) &#8211; Plants communication<br />\n(1:14:31) &#8211; Fame<br />\n(1:40:09) &#8211; Happiness<br />\n(1:47:26) &#8211; Artificial consciousness<br />\n(1:59:35) &#8211; Suffering<br />\n(2:04:19) &#8211; Eliezer Yudkowsky<br />\n(2:11:55) &#8211; e/acc (Effective Accelerationism)<br />\n(2:17:33) &#8211; Mind uploading<br />\n(2:28:22) &#8211; Vision Pro<br />\n(2:32:36) &#8211; Open source AI<br />\n(2:45:29) &#8211; Twitter<br />\n(2:52:44) &#8211; Advice for young people<br />\n(2:55:40) &#8211; Meaning of life</p>\n",
            "enclosures": [
                {
                    "url": "https://media.blubrry.com/takeituneasy/content.blubrry.com/takeituneasy/lex_ai_joscha_bach_3.mp3",
                    "length": "128929536",
                    "type": "audio/mpeg"
                }
            ],
            "content_encoded": "<p>Joscha Bach is a cognitive scientist, AI researcher, and philosopher. Please support this podcast by checking out our sponsors:<br />\n&#8211; <b>Numerai</b>: <a href=\"https://numer.ai/lex\">https://numer.ai/lex</a><br />\n&#8211; <b>Eight Sleep</b>: <a href=\"https://www.eightsleep.com/lex\">https://www.eightsleep.com/lex</a> to get special savings<br />\n&#8211; <b>MasterClass</b>: <a href=\"https://masterclass.com/lex\">https://masterclass.com/lex</a> to get 15% off<br />\n&#8211; <b>AG1</b>: <a href=\"https://drinkag1.com/lex\">https://drinkag1.com/lex</a> to get 1 month supply of fish oil</p>\n<p>Transcript: <a href=\"https://lexfridman.com/joscha-bach-3-transcript\">https://lexfridman.com/joscha-bach-3-transcript</a></p>\n<p><b>EPISODE LINKS:</b><br />\nJoscha&#8217;s Twitter: <a href=\"https://twitter.com/Plinz\">https://twitter.com/Plinz</a><br />\nJoscha&#8217;s Website: <a href=\"http://bach.ai\">http://bach.ai</a><br />\nJoscha&#8217;s Substack: <a href=\"https://substack.com/@joscha\">https://substack.com/@joscha</a></p>\n<p><b>PODCAST INFO:</b><br />\nPodcast website: <a href=\"https://lexfridman.com/podcast\">https://lexfridman.com/podcast</a><br />\nApple Podcasts: <a href=\"https://apple.co/2lwqZIr\">https://apple.co/2lwqZIr</a><br />\nSpotify: <a href=\"https://spoti.fi/2nEwCF8\">https://spoti.fi/2nEwCF8</a><br />\nRSS: <a href=\"https://lexfridman.com/feed/podcast/\">https://lexfridman.com/feed/podcast/</a><br />\nYouTube Full Episodes: <a href=\"https://youtube.com/lexfridman\">https://youtube.com/lexfridman</a><br />\nYouTube Clips: <a href=\"https://youtube.com/lexclips\">https://youtube.com/lexclips</a></p>\n<p><b>SUPPORT & CONNECT:</b><br />\n&#8211; Check out the sponsors above, it&#8217;s the best way to support this podcast<br />\n&#8211; Support on Patreon: <a href=\"https://www.patreon.com/lexfridman\">https://www.patreon.com/lexfridman</a><br />\n&#8211; Twitter: <a href=\"https://twitter.com/lexfridman\">https://twitter.com/lexfridman</a><br />\n&#8211; Instagram: <a href=\"https://www.instagram.com/lexfridman\">https://www.instagram.com/lexfridman</a><br />\n&#8211; LinkedIn: <a href=\"https://www.linkedin.com/in/lexfridman\">https://www.linkedin.com/in/lexfridman</a><br />\n&#8211; Facebook: <a href=\"https://www.facebook.com/lexfridman\">https://www.facebook.com/lexfridman</a><br />\n&#8211; Medium: <a href=\"https://medium.com/@lexfridman\">https://medium.com/@lexfridman</a></p>\n<p><b>OUTLINE:</b><br />\nHere&#8217;s the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.<br />\n(00:00) &#8211; Introduction<br />\n(06:26) &#8211; Stages of life<br />\n(18:48) &#8211; Identity<br />\n(25:24) &#8211; Enlightenment<br />\n(31:55) &#8211; Adaptive Resonance Theory<br />\n(38:42) &#8211; Panpsychism<br />\n(48:42) &#8211; How to think<br />\n(56:36) &#8211; Plants communication<br />\n(1:14:31) &#8211; Fame<br />\n(1:40:09) &#8211; Happiness<br />\n(1:47:26) &#8211; Artificial consciousness<br />\n(1:59:35) &#8211; Suffering<br />\n(2:04:19) &#8211; Eliezer Yudkowsky<br />\n(2:11:55) &#8211; e/acc (Effective Accelerationism)<br />\n(2:17:33) &#8211; Mind uploading<br />\n(2:28:22) &#8211; Vision Pro<br />\n(2:32:36) &#8211; Open source AI<br />\n(2:45:29) &#8211; Twitter<br />\n(2:52:44) &#8211; Advice for young people<br />\n(2:55:40) &#8211; Meaning of life</p>\n",
            "itunes_summary": "Joscha Bach is a cognitive scientist, AI researcher, and philosopher. Please support this podcast by checking out our sponsors:<br />\n- Numerai: https://numer.ai/lex<br />\n- Eight Sleep: https://www.eightsleep.com/lex to get special savings<br />\n- MasterClass: https://masterclass.com/lex to get 15% off<br />\n- AG1: https://drinkag1.com/lex to get 1 month supply of fish oil<br />\n<br />\nTranscript: https://lexfridman.com/joscha-bach-3-transcript<br />\n<br />\nEPISODE LINKS:<br />\nJoscha&#039;s Twitter: https://twitter.com/Plinz<br />\nJoscha&#039;s Website: http://bach.ai<br />\nJoscha&#039;s Substack: https://substack.com/@joscha<br />\n<br />\nPODCAST INFO:<br />\nPodcast website: https://lexfridman.com/podcast<br />\nApple Podcasts: https://apple.co/2lwqZIr<br />\nSpotify: https://spoti.fi/2nEwCF8<br />\nRSS: https://lexfridman.com/feed/podcast/<br />\nYouTube Full Episodes: https://youtube.com/lexfridman<br />\nYouTube Clips: https://youtube.com/lexclips<br />\n<br />\nSUPPORT & CONNECT:<br />\n- Check out the sponsors above, it&#039;s the best way to support this podcast<br />\n- Support on Patreon: https://www.patreon.com/lexfridman<br />\n- Twitter: https://twitter.com/lexfridman<br />\n- Instagram: https://www.instagram.com/lexfridman<br />\n- LinkedIn: https://www.linkedin.com/in/lexfridman<br />\n- Facebook: https://www.facebook.com/lexfridman<br />\n- Medium: https://medium.com/@lexfridman<br />\n<br />\nOUTLINE:<br />\nHere&#039;s the timestamps for the episode. On some podcast players you should be able to click the timestamp to jump to that time.<br />\n(00:00) - Introduction<br />\n(06:26) - Stages of life<br />\n(18:48) - Identity<br />\n(25:24) - Enlightenment<br />\n(31:55) - Adaptive Resonance Theory<br />\n(38:42) - Panpsychism<br />\n(48:42) - How to think<br />\n(56:36) - Plants communication<br />\n(1:14:31) - Fame<br />\n(1:40:09) - Happiness<br />\n(1:47:26) - Artificial consciousness<br />\n(1:59:35) - Suffering<br />\n(2:04:19) - Eliezer Yudkowsky<br />\n(2:11:55) - e/acc (Effective Accelerationism)<br />\n(2:17:33) - Mind uploading<br />\n(2:28:22) - Vision Pro<br />\n(2:32:36) - Open source AI<br />\n(2:45:29) - Twitter<br />\n(2:52:44) - Advice for young people<br />\n(2:55:40) - Meaning of life",
            "itunes_author": "Lex Fridman",
            "itunes_duration": "2:59:04",
            "itunes_episodeType": "full",
            "itunes_image": {
                "href": "https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png"
            },
            "media": {}
        }
]}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
