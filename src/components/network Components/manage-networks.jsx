import React from "react";
import Style from "../../../src/styles/manage-networks.module.css";

import { IoStatsChartSharp } from "react-icons/io5";
import { CiHashtag } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";

const ManageNetworks = () => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.recentCardHeader}>
          <h6>Manage Networks</h6>
        </div>
        <div className={Style.iconJobDiv}>
          <div className={Style.iconJob}>
            <IoStatsChartSharp />
            <p>
              <span>Connections </span>
              
            </p>
          </div>
          <div className={Style.iconJob}>
          <CiHashtag />
            <p>Contacts</p>
          </div>
          <div className={Style.iconJob}>
          <CiHashtag />
            <p>Folowing & Followers</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>Groups </p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>Events</p>
          </div>
          <div className={Style.groupsBox}>
            {/* <h6 className={Style.recentGroupHeader}>Groups</h6> */}

            <div className={Style.iconJob}>
            <IoStatsChartSharp />
            <p>Pages</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>Newsletters</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>HashTags</p>
          </div>
          <div className={Style.iconJob}>
            <p>Show more</p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ManageNetworks;
