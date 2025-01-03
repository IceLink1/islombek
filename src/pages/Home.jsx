import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import "../styles/Home.css";
import logo from "../images/islom-logo.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <section className="Home">
      <Helmet>
        <title>Домашняя страница - Islom Jalilov</title>
        <meta
          name="description"
          content="Личный сайт Ислама Джалилова, культурного критика и блогера из Андидана."
        />
        <meta
          name="keywords"
          content="Ислам Джалилов, культурный критик, блогер, Андидан , Islom Jalilov, culture critic, blogger, Andijan , Islom Jalilov, культурный критик, блогер, Андидан ,islom jalilov, culture critic, blogger, andijan , Islom jalilov"
        />
        <meta name="author" content="Islombek" />
        <link rel="canonical" href="https://icelink.uz" />
        <meta property="og:title" content="Islom Jalilov" />
        <meta
          property="og:description"
          content="Личный сайт Ислама Джалилова, культурного критика и блогера из Андидана."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://icelink.uz" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="Home-Content">
        <div>
          <h1>Islom Jalilov</h1>
          <h4>
            I'm a dedicated culture critic and blogger <br /> located in
            Andijan.
          </h4>
        </div>
        <div className="Home-Links">
          <div>
            <Link to="https://t.me/Islom_jalilov" target="_blank">
              <TelegramIcon />
            </Link>
            <Link to="https://www.instagram.com/islom__jalilov?igsh=d25sbnoxa3l1bWhh" target="_blank">
              <InstagramIcon />
            </Link>
            <Link to="https://x.com/islam_jalilov?s=21" target="_blank">
              <XIcon />
            </Link>
          </div>
          <h2>Islom_jalilov@gmail.com</h2>
        </div>
      </div>
      <div className="Home-Image">
        <img src={logo} alt="" />
      </div>
    </section>
  );
}
