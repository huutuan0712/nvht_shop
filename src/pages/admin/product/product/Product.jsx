import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  ReloadOutlined,
 } from "@ant-design/icons";
 import {
  Avatar,
  Badge,
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Select,
  Space,
  Table,
  Typography,
 } from "antd";;

  // import useDefineSearch from "hook/useDefineSearch";
//  import { useProduct } from "hook/useProduct";
  // import AddProduct from "pages/admin/product/product/AddProduct";
//  import EditCategory from "pages/admin/product/product/category/EditCategory";
//  import EditSize from "pages/admin/product/product/size/EditSize";
 import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputNumberWait from "../../../../components/InputNumberWait/InputNumberWait";
import useProduct from "../../../../hook/useProduct";
import { formatDate } from "../../../../utils/common";
import AddProduct from "./AddProduct";
//  import { formatDate, formatMoney } from "utils/common";
//  import _debounce from "lodash/debounce";
//  import InputNumberWait from "components/inputNumberDebounce/InputNumberWait";
 export default function Product() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const { fetchProduct } = useProduct();
  const [openEditSize, setOpenEditSize] = useState({
   editing: false,
   product: {} ,
  });
  // const { getColumnSearchProps } = useDefineSearch();
  const [openCategory, setOpenCategory] = useState({
   editing: false,
   product: {} ,
  });
  const products = useSelector(state=>state.product.Products);
  console.log(products);
  const columns = [
   {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
    render: (image,posters) => {
     return (
      <Avatar.Group>
      {image?.map((it) => (
       <Avatar key={Math.random()} src={it.image} />
      ))}
     </Avatar.Group>
     );
    },
   },
   {
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "name",
    // ...getColumnSearchProps("name"),
    render: (text, record) => (
     <Typography.Paragraph
      editable={{
       onChange: (text) => updateProduct(record.id, { name: text }),
      }}>
      {text}
     </Typography.Paragraph>
    ),
   },
   {
    title: "Đơn giá",
    dataIndex: "price",
    key: "price",
    render: (text, record) => (
     <InputNumberWait
      addonAfter="VND"
      fn={(value) => updateProduct(record.id, { price: value })}
      data={record.price}
     />
    ),
   },
   {
    title: "Size - Số lượng",
    dataIndex: "size",
    key: "size",
    render: (text, record) => (
     <Space direction="vertical">
      <Badge  color={record.qty > 0 ? "green" : "red"} 
      text={`Size ${record.size} - ${record.qty} Đôi`}
      />
    
      <Button
       onClick={() => {
        setOpenEditSize({
         editing: true,
         product: record,
        });
       }}
       icon={<EditOutlined />}
       block>
       Cật nhật
      </Button>
     </Space>
    ),
   },
   {
    title: "DM",
    dataIndex: "category",
    key: "category",
    render: (text, record) => (
     <Space>
      <Typography>
       {record.category.name}
      </Typography>
      <Button
       onClick={() =>
        setOpenCategory({
         editing: true,
         product: record,
        })
       }
       icon={<EditOutlined />}
      />
     </Space>
    ),
   },
 
   {
    title: "Thời gian",
    dataIndex: "createAt",
    render: (text, record, index) => {
     return (
      <>
       <div>Ngày tạo: {formatDate(record.createdAt)}</div>
       <div>Cật nhật: {formatDate(record.updatedAt)}</div>
      </>
     );
    },
   },
   {
    title: "Thao tác",
    render: (text, record, index) => {
     return (
      <Space>
       <Popconfirm
        title="Bạn chắc chắn muốn xoá sản phẩm này!"
        onConfirm={() => deleteProduct(record.id)}>
        <Button icon={<DeleteOutlined />} />
       </Popconfirm>
      </Space>
     );
    },
   },
  ];
 
  return (
   <div className="product">
    <Space className="product__header py-2">
     <Button
      icon={<PlusOutlined />}
      onClick={() => setOpenAddModal(true)}>
      Thêm sản phẩm
     </Button>
     <Button onClick={() => fetchProduct()} icon={<ReloadOutlined />}>
      Làm mới
     </Button>
    </Space>
    <Table
     rowKey={(record) => record.id}
     expandable={{
      expandedRowRender: (record) => (
       <Typography.Paragraph
        editable={{
         onChange: (text) => updateProduct(record.id, { note: text }),
        }}>
        {record.note}
       </Typography.Paragraph>
      ),
     }}
     dataSource={products.product}
     columns={columns}
    />
    <AddProduct
     show={openAddModal}
     hide={() => setOpenAddModal(false)}
    />
    {/* <EditSize
     product={openEditSize.product}
     onHide={() =>
      setOpenEditSize({ product: {} , editing: false })
     }
     visible={openEditSize.editing}
    /> */}
    {/* <EditCategory
     product={openCategory.product}
     onHide={() =>
      setOpenCategory({ product: {} , editing: false })
     }
     visible={openCategory.editing}
    /> */}
   </div>
  );
 }
 