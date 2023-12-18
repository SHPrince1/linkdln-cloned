import React from "react";
import Style from "../styles/notification-page.module.css";
import Notifications from "../components/notifications/notification";
import MobileTopNav from "../components/mobile-top-nav";

const Notification = () => {
  return (
    <div className={Style.notiContainer}>
      <div className={Style.mutliplesBtn}>
        <button>All</button>
        <button>My post</button>
        <button>Mentions</button>
      </div>

      {/* <button>New</button> */}
      <div className={Style.notifiCards}>
        <MobileTopNav />
        <div className={Style.notifiCards2}>
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Notification;
