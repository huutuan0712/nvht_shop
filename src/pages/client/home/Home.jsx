import { Space } from 'antd'
import React from 'react'
import Banner from './banner/Banner'
import HomeCategory from './category/HomeCategory'


function Home() {
  
  return (
    <>
      <Banner/>
      <Space direction="vertical">
      <HomeCategory />
      {/* <ProductListing /> */}
    </Space>
    </>
  )
}

export default Home