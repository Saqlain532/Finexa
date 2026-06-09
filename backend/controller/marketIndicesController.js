import axios from 'axios';

export const getMarketIndices = async (req, res) => {
  try {
    // Using major US ETFs as proxies for the broader market
    const symbols = ['SPY', 'QQQ']; 
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    
    const indexPromises = symbols.map(async (symbol) => {
      const response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
      );
      
      return {
        // Map the ETF symbol to a readable UI name
        name: symbol === 'SPY' ? 'S&P 500' : 'NASDAQ',
        price: response.data.c,
        change: response.data.d,
        percentChange: response.data.dp
      };
    });

    const marketData = await Promise.all(indexPromises);
    return res.json(marketData);

  } catch (error) {
    console.error('Market Index Fetch Error:', error.message);
    return res.status(500).json({ message: "Failed to fetch market indices via Finnhub" });
  }
};