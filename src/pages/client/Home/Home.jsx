import { Space } from "antd";
import Banner from "../../pages/client/Home/banner/Banner";
import HomeCategory from "../../pages/client/Home/category/HomeCategory";

import React from "react";

export default function Home() {
    return (
        <>
            <Banner />
            <Space direction="vertical">
                <HomeCategory />
            </Space>
        </>
    );
}
