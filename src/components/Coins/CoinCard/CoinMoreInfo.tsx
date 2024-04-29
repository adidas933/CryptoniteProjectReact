export interface MoreInfoState {
  id: string;
  image: {
    thumb: string;
  };
  market_data: {
    current_price: {
      eur: number;
      ils: number;
      usd: number;
    };
  };
}

export const CoinMoreInfo = ({
  moreInfoContent,
}: {
  moreInfoContent: MoreInfoState | null;
}) => {
  return (
    <div>
      {moreInfoContent ? (
        <div>
          <img src={moreInfoContent.image.thumb} alt='Coin image' />
          <p>{moreInfoContent.market_data.current_price.usd} $</p>
          <p>{moreInfoContent.market_data.current_price.eur} €</p>
          <p>{moreInfoContent.market_data.current_price.ils} ₪</p>
        </div>
      ) : (
        <p>No more info available</p>
      )}
    </div>
  );
};
