import Twit from "twit";

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

const T = new Twit({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
});

class Twitter {
  async getTweetsByCountry(country = "Peru") {
    const date = new Date(Date.now() - 24 * 60 * 60 * 1000 * 7);
    const since = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const config = {
      q: `#${country} ${country === "Peru" && "minsa"} #coronavirus #covid19 since:${since}`,
      count: 20,
    };
    const { data } = await T.get("search/tweets", config);
    const response = data.statuses;
    return response;
  }
}

export default Twitter;
