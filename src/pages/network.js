import React from "react";
import AcceptRequest from "../components/network Components/accept-request";
import ConnectSuggest from "../components/network Components/connect-suggest";
import Style from '../styles/network.module.css'
const Network = () => {
  return (
    <div>
      <AcceptRequest />
      <AcceptRequest />
      <AcceptRequest />
      <div className={Style.conntectSuggest}>
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
        <ConnectSuggest />
      </div>
    </div>
  );
};

export default Network;
