import React from "react";
import Style from "../../../src/styles/recent-card.module.css";

import { IoStatsChartSharp } from "react-icons/io5";
import { CiHashtag } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const RecentCard = () => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.recentCardHeader}>
          <h6>RECENT</h6>
        </div>
        <div className={Style.iconJobDiv}>
          <div className={Style.iconJob}>
            <IoStatsChartSharp />
            <p>
              <span>Developers, </span>
              <span> Engibneers,</span> <span>& Technician,</span>
            </p>
          </div>
          <div className={Style.iconJob}>
          <CiHashtag />
            <p>engineeringJobs</p>
          </div>
          <div className={Style.iconJob}>
          <CiHashtag />
            <p>TechJobs</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>Software Developer</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>Data scientist & Analyst</p>
          </div>
          <div className={Style.groupsBox}>
            <h6 className={Style.recentGroupHeader}>Groups</h6>

            <div className={Style.iconJob}>
            <IoStatsChartSharp />
            <p>engineeringJobs</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>TechJobs</p>
          </div>
          <div className={Style.iconJob}>
          <IoStatsChartSharp />
            <p>Software Developer</p>
          </div>
          <div className={Style.iconJob}>
            <p>Show more</p>
          </div>
          </div>
          <div className={Style.AddEventBox}>
            <p>Events</p>
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
