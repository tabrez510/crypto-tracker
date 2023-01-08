import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Tabs from "../components/Dashboard/Tabs/tabs";
import { DASHBOARD_API_URL } from "../constants";

function DashboardPage() {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <Header />
      <Tabs data={data} />
    </div>
  );
}

export default DashboardPage;