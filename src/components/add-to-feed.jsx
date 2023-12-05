import React from "react";
import Style from "../../src/styles/add-to-feed.module.css";
import NameComFollow from "./name-com-follow";
import { TiInfoLarge } from "react-icons/ti";

const AddtToFeed = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.addIcon}>
          <p>ADD TO YOUR FEED</p>
          < TiInfoLarge  />
        </div>
        <div>
          <NameComFollow />
        </div>
        <div>
          <NameComFollow />
        </div>
        <div>
          <NameComFollow />
        </div>
        <div>
          <a href="ioi">View All recomendations </a>
        </div>
       
      </div>
    </>
  );
};

export default AddtToFeed;
