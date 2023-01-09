import React, { useEffect, useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./styles.css";
import { convertNumbers } from "../../../functions/convertNumber";
import { motion } from "framer-motion";

function List({ coin, delay }) {
  const [volume, setVolume] = useState("");

  useEffect(() => {
    setVolume(convertNumbers(parseInt(coin.total_volume)));
  }, []);

  return (
    <motion.tr
      className="list-row"
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
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
    </motion.tr>
  );
}

export default List;