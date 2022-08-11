import React from 'react'
import Mobile from './Mobile';
import Ipad from './Ipad';
import Accessories from './Accessories';
import MacBook from './MacBook';
import Laptop from './Laptop';

const Home = () => {
  return (
    <>
        <Mobile />
        <Laptop />
        <Ipad />
        <MacBook />
        <Accessories />

    </>
  )
}

export default Home;