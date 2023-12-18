import React from "react";
import Style from "../styles/job-page.module.css";
import JobComponent from "../components/job/job-component";
import MobileTopNav from "../components/mobile-top-nav";
import RecommendedJob from "../components/job/recommended-job";

const Jobs = () => {
  return (
    <div>
      <MobileTopNav />
      <div className={Style.btnDiv}>
        <button>My jobs</button>
        <button>My jobs</button>
        <button>My jobs</button>
      </div>
      <JobComponent />

      <div className={Style.jobsRecom}>
        <h3>Recommended Jobs for you</h3>
        <RecommendedJob />
        <RecommendedJob />
        <RecommendedJob />
        <a href="wwwlw" className={Style.linkIcon}> <h3>See more</h3> </a>
        
        
      </div>
    </div>
  );
};

export default Jobs;
