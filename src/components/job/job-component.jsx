import React from 'react'
import RecentSearch from './recent-search'
import Style from '../../styles/job-page.module.css'
// import MobileTopNav from '../mobile-top-nav'

const JobComponent = () => {
  return (
    <div>
        {/* <MobileTopNav /> */}
       <div className={Style.serachClear}>
        <h3>Recent searches</h3>
        <p>Clear</p>
      </div>
        <RecentSearch />
        <RecentSearch />
        <RecentSearch />
        <div>
        <h5>Show more</h5>
      </div>
    </div>
  )
}

export default JobComponent