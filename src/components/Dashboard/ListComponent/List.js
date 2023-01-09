import React, { useEffect, useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./styles.css";
import { convertNumbers } from "../../../functions/convertNumber";

function List({ coin }) {
  const [volume, setVolume] = useState("");

  useEffect(() => {
    setVolume(convertNumbers(parseInt(coin.total_volume)));
  }, []);

  return (
    <tr className="list-row">
      <td className="td-img">
        <img src={coin.image} className="coin-logo" />
      </td>
      <td className="td-name-flex">
        <div className="name-flex ">
          <p className="coin-symbol name-text">{coin.symbol}-USD</p>
          <p className="coin-name name-text">{coin.name}</p>
        </div>
      </td>
      <td className="td-chip-flex">
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="coin-chip percentage-text">
              {coin.price_change_percentage_24h.toFixed(2) + " %"}
            </div>
            <TrendingUpRoundedIcon className="icon chip-icon" />
          </div>
        ) : (
          <div className="chip-flex">
            <div className="coin-chip chip-red percentage-text">
              {coin.price_change_percentage_24h.toFixed(2) + " %"}
            </div>
            <TrendingDownRoundedIcon className="icon chip-red chip-icon" />
          </div>
        )}
      </td>
      <td>
        <p
          className="coin-price name-text"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          $ {coin.current_price.toLocaleString()}
        </p>
      </td>
      <td className="td-mkt-cap">
        <p>${coin.total_volume.toLocaleString()}</p>
      </td>
      <td className="td-mkt-cap">
        <p>${coin.market_cap.toLocaleString()}</p>
      </td>
      <td className="td-vol-cap">
        <p>${volume}</p>
      </td>
    </tr>
  );
}

export default List;