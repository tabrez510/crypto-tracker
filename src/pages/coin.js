import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../components/Coin/Chart";
import Info from "../components/Coin/Info/info";
import Header from "../components/Common/Header";
import Loading from "../components/Common/Loading/loading";
import List from "../components/Dashboard/ListComponent/List";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getDaysArray } from "../functions/getDaysArray";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(90);
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - days));

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [],
        fill: false,
        borderColor: "#fff",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const data = await getCoinData(id);
    const prices = await getCoinPrices(id, days);

    if (data) {
      console.log("data", data);
      setCoin({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
        total_volume: data.market_data.total_volume.usd,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
      });
      setLoading(false);
    }
    if (prices) {
      console.log("Prices", prices);

      setChartData({
        labels: getDaysArray(priorDate, today),
        datasets: [
          {
            label: "Prices",
            data: prices?.map((data) => data[1]),
            fill: false,
            borderColor: "#fff",
            tension: 0.1,
          },
        ],
      });
    }
  };

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
          <LineChart chartData={chartData} />
          <Info name={coin.name} desc={coin.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;