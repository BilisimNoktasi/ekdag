import { TwitterApi } from 'twitter-api-v2'
import {CronJob} from 'cron'

const client = new TwitterApi({
  appKey: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY as string,
  appSecret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET as string,
  accessToken: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN as string,
  accessSecret: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET as string,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {

    // const bearer = new TwitterApi(process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN as string);
    const twitterClient = client.readWrite;
    
    const tweet = async() => {
      try{
       const response =  await twitterClient.v2.userTimeline(process.env.NEXT_PUBLIC_USER_ID_TWITTER as string, {
          max_results: 5
         })
          
         res.status(200).json(response.data)
      }catch(err) {
        console.log('V2Err: ',err)
      }
    }
        const tweetCron = new CronJob('30 * * * * *', async()=> {
          tweet()
        })
        tweetCron.start()
    // try {
    //   const tweets = await client.get('statuses/user_timeline', {
    //     screen_name: '1865436805773791232alidrkk', // Buraya kendi kullanıcı adınızı girin
    //     count: 5,
    //   });
    //   res.status(200).json(tweets);
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
      }
}