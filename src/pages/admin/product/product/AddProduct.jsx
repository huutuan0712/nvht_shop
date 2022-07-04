import { PlusOutlined } from "@ant-design/icons";
import {
 Button,
 Descriptions,
 Form,
 Input,
 InputNumber,
 message,
 Modal,
 Select,
 Space,
 Typography,
 Upload,
} from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import useUpload from "../../../../hook/useUpload";
// import SizeForm from "pages/admin/product/product/size/AddSizeModal";
import  useProduct  from "../../../../hook/useProduct";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
// import { ISizes } from "constants/models/product.model";
// import { createRule } from "pages/client/cart/Payment";

export default function AddProduct(props) {
 const { hide, show } = props;
 const [onOpenSizeModal, setOnOpenSizeModal] = useState(false);
 const { category } = useSelector((state) => state.category.categories );
console.log(category);
 const { Option } = Select;
 const { fileList, onChangeFileList, beforeUpload, onRemove } =
  useUpload();
 const [cateSelected, setCateSelected] = useState([]);
 const [form] = Form.useForm();
 const { addProduct } = useProduct();
 const changeCate = (value) => {
  const selected = category.findIndex(
   (item) => item.id === value
  );
  setCateSelected(category[selected]?.subCategory || []);
 };

 const onSubmit = useCallback(
  (value) => {
   let formData = new FormData();
   if (fileList.length < 4) {
    message.error("Phải có đủ 4 ảnh");
    return;
   }
   if (!value.size) {
    message.error("Phải ít nhất 1 size");
    return;
   }
   fileList.forEach((item) => {
    formData.append("posters", item.originFileObj);
   });
   formData.append("name", value.name);
   formData.append("note", value.note);
   formData.append("size", JSON.stringify(value.size));
   formData.append("nsx", value.nsx);
   formData.append("category", value.category);
   formData.append("price", value.price);
   addProduct(formData);
  },
  [form, fileList]
 );

 return (
  <Modal
   width={"40%"}
   title="Thêm sản phẩm"
   onOk={() => form.submit()}
   visible={show}
   onCancel={() => hide(false)}>
   <Form.Provider
    onFormFinish={(name, { values, forms }) => {
     if (name === "sizeForm") {
      const { productForm, sizeForm } = forms;
      const sizes = productForm.getFieldValue("size") || [];
      productForm.setFieldsValue({
       size: [...sizes, values],
      });
      setOnOpenSizeModal(false);
     }
    }}>
    <Form
     onFinish={onSubmit}
     name="productForm"
     form={form}
     labelCol={{ span: 5 }}
     wrapperCol={{ span: 15 }}>
     <Form.Item
      label="Tên sản phẩm"
      name="name"
      rules={[{required: true, message: "Tên sản phẩm không được để trống" }]}>
      <Input placeholder="Nhập tên sản phẩm" />
     </Form.Item>
     <Form.Item
      label="Đơn giá"
      name="price"
      rules={[{required: true, message: "Đơn giá không được để trống" }]}>
      <InputNumber
       min={1}
       placeholder="Nhập đơn giá"
       width={300}
       addonAfter="VNĐ"
      />
     </Form.Item>
     <Form.Item
      label="Mô tả"
      name="note"
      rules={[{required: true, message: "Mô tả không được để trống" }]}>
      <Input.TextArea placeholder="Nhập mô tả sản phẩm" />
     </Form.Item>
     <Form.Item
      label="Danh mục"
      name="category"
      rules={[{required: true, message: "Danh mục không được để trống" }]}>
      <Select onChange={changeCate}>
       {category?.map((item, idx) => (
        <Option key={Math.random()} value={item._id}>
         {item.name}
        </Option>
       ))}
      </Select>
     </Form.Item>
     <Form.Item label="Hình ảnh">
      <Upload
       accept=".jpg, .jpeg, .png"
       fileList={fileList}
       onRemove={onRemove}
       beforeUpload={beforeUpload}
       listType="picture-card"
       maxCount={4}
       multiple
       onChange={onChangeFileList}>
       {fileList.length < 4 && "+ Upload"}
      </Upload>
     </Form.Item>
     <Form.Item
      wrapperCol={{ span: 24 }}
      name="size"
      dependencies={["size"]}
      shouldUpdate={(prevValues, curValues) => {
       return prevValues.size !== curValues.size;
      }}>
      <Typography.Paragraph code type="success">
       Bảng size - Số lượng giày mỗi size
      </Typography.Paragraph>
      <Descriptions
       style={{ width: "100%" }}
       bordered
       layout="vertical">
       {form.getFieldValue("size")?.map((it) => (
        <Descriptions.Item label={`Số ${it.size}`}>
         {it.quantity} đôi
        </Descriptions.Item>
       ))}
      </Descriptions>
      <Button
       block
       type="dashed"
       onClick={() => setOnOpenSizeModal(true)}
       icon={<PlusOutlined />}>
       Thêm size
      </Button>
     </Form.Item>
    </Form>
    {/* <SizeForm
     visible={onOpenSizeModal}
     onCancel={() => setOnOpenSizeModal(false)}
    /> */}
   </Form.Provider>
  </Modal>
 );
}
