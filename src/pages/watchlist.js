import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Tabs from "../components/Dashboard/Tabs/tabs";
import { DASHBOARD_API_URL } from "../constants";

function WatchListPage() {
  const watchlist = localStorage.getItem("watchlist").split(",");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("watchlist was changed");
  }, [watchlist]);

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("Response Data >>>", response.data);
        var myCoins = response.data.filter((coins) =>
          watchlist.includes(coins.id)
        );
        console.log("my coins", myCoins);
        setCoins(myCoins);
      })
      .catch((error) => {
        console.log("Error>>>", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Tabs data={coins} />
      </div>
    </div>
  );
}

export default WatchListPage;