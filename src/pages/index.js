import React from 'react';
import MobileTopNav from '../components/mobile-top-nav';
import AddsCards from '../components/adds-cards';
import UserCard from '../components/user-card';
import CompanyCard from '../components/company-card';

const Index = () => {
  return (
    <div>

        <MobileTopNav/>
        <AddsCards />
        <UserCard />
        <CompanyCard />
      
    </div>
  );
}

export default Index;
