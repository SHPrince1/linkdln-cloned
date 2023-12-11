import React from 'react'
import AcceptRequest from '../components/network Components/accept-request'
import ConnectSuggest from '../components/network Components/connect-suggest'

const Network = () => {
  return (
    <div>
      <AcceptRequest />
      <AcceptRequest />
      <AcceptRequest />
      <ConnectSuggest />
    </div>
  )
}

export default Network