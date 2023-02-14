import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Paradigm Facilitator</title>
        <meta
          property="og:title"
          content="International Paradigm Facilitator"
        />
      </Helmet>
    </div>
  )
}

export default Home
