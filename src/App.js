import React from "react";
import "./styles/App.css";
import AppRouter from "./routes/AppRouter";
import Navbar from "./compotents/Navbar/Navbar";
import { Helmet } from "react-helmet";
import icon from "./images/islom-logo.jpg";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Islom Jalilov</title>
        <link rel="icon" href={icon} />
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
        <meta property="og:url" content="https://icelink.uz" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <AppRouter />
    </div>
  );
}
