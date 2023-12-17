import React from "react";
import AcceptRequest from "../components/network Components/accept-request";
import ConnectSuggest from "../components/network Components/connect-suggest";
import Style from "../styles/network.module.css";
import OnlineEvents from "../components/network Components/online-events";
import TrendingPeople from "../components/network Components/trending-people";
import FollowCareer from "../components/network Components/follow-career";
// import RecentCard from "../components/destop/recent-card";
import PremiumAddsCard from "../components/destop/premium-adds-card";
import ManageNetworks from "../components/network Components/manage-networks";
const Network = () => {
  return (
    <div className={Style.container}>
      <div className={Style.RecentCardContainer}>
        <ManageNetworks />
        <div className={Style.premiumCardDiv}>
          <PremiumAddsCard />
        </div>
      </div>

      <div className={Style.NetworkCardsContainer}>
        <div className={Style.acceptRequest}>
          <h6>Invitations</h6>
          <AcceptRequest />

          <AcceptRequest />
          <AcceptRequest />
        </div>

        <div className={Style.conntectSuggest}>
          <ConnectSuggest />
          <ConnectSuggest />
          <ConnectSuggest />
          <ConnectSuggest />
          <ConnectSuggest />
          <ConnectSuggest />
          <ConnectSuggest />
          <ConnectSuggest />
        </div>
        <div className={Style.onlineEventsContainer}>
          <OnlineEvents />
          <OnlineEvents />
          <OnlineEvents />
          <OnlineEvents />
          <OnlineEvents />
          <OnlineEvents />
        </div>
        <div className={Style.TrendingPeopleContainer}>
          <TrendingPeople />
          <TrendingPeople />
          <TrendingPeople />
          <TrendingPeople />
          <TrendingPeople />
          <TrendingPeople />
        </div>
        <div className={Style.TrendingCareerContainer}>
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
          <FollowCareer />
        </div>
      </div>
    </div>
  );
};

export default Network;
