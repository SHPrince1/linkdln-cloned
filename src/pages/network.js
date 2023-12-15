import React from "react";
import AcceptRequest from "../components/network Components/accept-request";
import ConnectSuggest from "../components/network Components/connect-suggest";
import Style from "../styles/network.module.css";
import OnlineEvents from "../components/network Components/online-events";
import TrendingPeople from "../components/network Components/trending-people";
import FollowCareer from "../components/network Components/follow-career";
const Network = () => {
  return (
    <div className={Style.container}>
      <AcceptRequest />
      
      <AcceptRequest />
      <AcceptRequest />
      <div className={Style.conntectSuggest}>
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
        {/* <ConnectSuggest />
        <ConnectSuggest /> */}
        {/* <ConnectSuggest /> */}
       
      </div>
      <div className={Style.onlineEventsContainer}>
        <OnlineEvents />
        <OnlineEvents />
        <OnlineEvents />
        <OnlineEvents />
        <OnlineEvents />
        <OnlineEvents />
      </div>
      <div>
        <TrendingPeople />
      </div>
      <div>
        <FollowCareer />
      </div>
    </div>
  );
};

export default Network;
