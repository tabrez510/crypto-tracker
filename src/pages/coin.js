import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Coin/Info/info";
import Header from "../components/Common/Header";
import Loading from "../components/Common/Loading/loading";
import List from "../components/Dashboard/ListComponent/List";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("Response Data >>>", response.data);
          setCoin({
            id: response.data.id,
            name: response.data.name,
            symbol: response.data.symbol,
            image: response.data.image.large,
            desc: response.data.description.en,
            price_change_percentage_24h:
              response.data.market_data.price_change_percentage_24h,
            total_volume: response.data.market_data.total_volume.usd,
            current_price: response.data.market_data.current_price.usd,
            market_cap: response.data.market_data.market_cap.usd,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error>>>", error);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grey-container">
            <List coin={coin} />
          </div>
          <Info name={coin.name} desc={coin.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;