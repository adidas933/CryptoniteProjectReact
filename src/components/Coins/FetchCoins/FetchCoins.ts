
export const FetchCoins = ()=> {
  return fetch('https://api.coingecko.com/api/v3/coins/list')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
