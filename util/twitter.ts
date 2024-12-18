import { TwitterApi } from 'twitter-api-v2'

const client = new TwitterApi({
  appKey: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY as string,
  appSecret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET as string,
  accessToken: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN as string,
  accessSecret: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET as string,
});

export default client;