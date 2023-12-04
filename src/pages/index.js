import React from 'react';
import MobileTopNav from '../components/mobile-top-nav';
import AddsCards from '../components/adds-cards';
import UserCard from '../components/user Card/user-card'
import CompanyCard from '../components/company-card';
import DesktopPost from '../components/destop/desktop-post';
// import PostFeedsItems from '../components/post-feeds-items';

const Index = () => {
  return (
    <div>

        <DesktopPost />
        {/* <PostFeedsItems /> */}
        <MobileTopNav/>
        <AddsCards />
        <UserCard />
        <CompanyCard />
      
    </div>
  );
}

export default Index;
