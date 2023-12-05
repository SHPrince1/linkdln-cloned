import React from "react";
import Style from "../../src/styles/add-to-feed.module.css";
import NameComFollow from "./name-com-follow";

const AddtToFeed = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.addIcon}>
          <p>ADD TO YOUR FEED</p>
          <p>Icon</p>
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
          <p>View All recomendations </p>
        </div>
       
      </div>
    </>
  );
};

export default AddtToFeed;
