import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search/search";
import Tabs from "../components/Dashboard/Tabs/tabs";
import { DASHBOARD_API_URL } from "../constants";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Loading from "../components/Common/Loading/loading";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("Response Data >>>", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error>>>", error);
      });
  }, []);

  var filteredCoins = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return item;
      }
    });
  
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  
    let mybutton = document.getElementById("myBtn");
  
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }

  return (
    <div>
      <Header />
            {loading ? (
        <Loading />
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <Tabs data={filteredCoins} />
          <div onClick={() => topFunction()} id="myBtn" className="top-btn">
            <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardPage;