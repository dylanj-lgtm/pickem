const ODDS_API_KEY = "85afbdcb57caef0ad9a99947d74314c2";

export default async function handler(req, res) {
  try {
    const url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${ODDS_API_KEY}&regions=us&markets=spreads,totals&oddsFormat=american`;
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
