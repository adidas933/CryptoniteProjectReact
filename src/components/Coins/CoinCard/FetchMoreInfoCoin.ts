export const fetchMoreInfoCoin = (coinId: string) => {
  return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const { id, image, market_data } = data;
      const { thumb } = image;
      const { current_price } = market_data;
      const { eur, usd, ils } = current_price;
      return {
        id,
        image: { thumb },
        market_data: { current_price: { eur, usd, ils } },
      };
    })
    .catch((error) => {
      console.error('Error fetching coin info:', error);
      throw error;
    });
};
