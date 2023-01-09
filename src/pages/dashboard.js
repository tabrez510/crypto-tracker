import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search/search";
import Tabs from "../components/Dashboard/Tabs/tabs";
import { DASHBOARD_API_URL } from "../constants";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("Response Data >>>", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error>>>", error);
      });
  }, []);

  var filteredCoins = data.filter(
    (item) =>
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Tabs data={filteredCoins} />
    </div>
  );
}

export default DashboardPage;