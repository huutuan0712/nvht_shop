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

import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useProduct } from "../../../../hook/useProduct";


export default function AddProduct(props) {
 const { hide, show } = props;
 const [onOpenSizeModal, setOnOpenSizeModal] = useState(false);
 const  {category} = useSelector(state=>state.category.categories);
//  console.log(categories);

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
//    if (!value.size) {
//     message.error("Phải ít nhất 1 size");
//     return;
//    }
console.log(fileList);
  fileList.forEach((item) => {

  formData.append("image[]",item.originFileObj);
});
   formData.append("name", value.name);
   formData.append("slug", value.slug);
   formData.append("description", value.description);
   formData.append("size", value.size);
    formData.append("qty", value.qty);
   formData.append("cate_id", value.cate_id);
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
      label="Slug"
      name="slug"
      rules={[{required: true, message: "Tên sản phẩm không được để trống" }]}>
      <Input placeholder="Nhập slug sản phẩm" />
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
      name="description"
      rules={[{required: true, message: "Mô tả không được để trống" }]}>
      <Input.TextArea placeholder="Nhập mô tả sản phẩm" />
     </Form.Item>
     <Form.Item
      label="Danh mục"
      name="cate_id"
      rules={[{required: true, message: "Danh mục không được để trống" }]}>
      <Select onChange={changeCate}>
       {category?.map((item, idx) => (
        <Option key={Math.random()} value={item.id}>
         {item.name}
        </Option>
       ))}
      </Select>
     </Form.Item>
     <Form.Item label="Hình ảnh"  >
      <Upload
       accept=".jpg, .jpeg, .png"
       fileList={fileList}
       onRemove={onRemove}
       beforeUpload={beforeUpload}
       listType="picture-card"
       maxCount={4}
       multiple
       onChange={onChangeFileList}
        >
       {fileList.length <4 && "+ Upload"}
      </Upload>
     </Form.Item>
     <Form.Item
      label="Số lượng"
      name="qty"
      rules={[{required: true, message: "Số lượng không được để trống" }]}>
      <InputNumber placeholder="Nhập Số lượng sản phẩm" />
     </Form.Item>
     <Form.Item
      label="Size"
      name="size"
      rules={[{required: true, message: "Số lượng không được để trống" }]}>
      <Input placeholder="Nhập Size sản phẩm" />
     </Form.Item>
    </Form>
     
   </Form.Provider>
  </Modal>
 );
}
