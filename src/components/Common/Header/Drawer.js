import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import styles from "./styles.module.css";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.drawerDiv}>
      <MenuRoundedIcon
        className={styles.link}
        style={{ fontSize: "1.5rem", margin: 0 }}
        onClick={() => setOpen(true)}
      />
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className={styles.drawer}>
          <a href="/">
            <p className={styles.link}>Home</p>
          </a>
          <a href="/compare">
            <p className={styles.link}>Compare</p>
          </a>
          <a href="/dashboard">
            <p className={styles.link}>Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}