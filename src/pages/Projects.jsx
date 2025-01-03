import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [{}, {}, {}, {}, {}, {}];
  return (
    <div>
      <Helmet>
        <title>Проекты - Islom Jalilov</title>
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
        {/* <meta property="og:image" content={} /> */}
        <meta property="og:url" content="https://icelink.uz" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="Projects">
        {projects.map((project, index) => (
          <div></div>
        ))}
      </div>
    </div>
  );
}
