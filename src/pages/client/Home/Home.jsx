import { Space } from "antd";
import Banner from './banner/Banner'
import React from "react";
import HomeCategory from "./category/HomeCategory";
import ProductListing from "./product/Product";

export default function Home() {
    return (
        <>
            <Banner/>
            <Space direction="vertical">
                <HomeCategory />
                <ProductListing/>
            </Space>
        </>
    );
}
