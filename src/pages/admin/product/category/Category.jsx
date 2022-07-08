import {
    EditOutlined,
    PlusOutlined,
    ReloadOutlined,
    UploadOutlined,
    DeleteOutlined
   } from "@ant-design/icons";
   import {
    Button,
    Card,
    Form,
    Image,
    Input,
    Space,
    Table,
    Tag,
    Typography,
    Upload,
    Popconfirm
   } from "antd";
   
import useUpload from "../../../../hook/useUpload";
import React, { useCallback, useState } from "react";
import {useSelector} from 'react-redux';
import useCategory from "../../../../hook/useCategory";
   export default function Category() {
    const  categories  = useSelector(state=>state.category.categories);

    const [openAddCategory, setOpenAddCategory] = useState(false);
    const { beforeUpload, fileList, onChangeFileList, onRemove } = useUpload();
    const { fetchCategory,addCategory,updateCategory,deleteCategory} = useCategory();
    const [form] = Form.useForm();
    const column = [
     {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
       return (
        <Typography.Paragraph
         editable={{
          onChange: (text) => {
           const data = {
            name: text,
            slug: text,
           };
         //   console.log(data);
           updateCategory(record.id, data);
          },
         }}>
         {text}
        </Typography.Paragraph>
       );
      },
     },
     {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image, record) => {
       return (
        <Space>
         <Image src={image} width={100} />
         <Upload
          onChange={(file) =>
           updateCategory(record.id, null, file.file.originFileObj)
          }>
          <Button icon={<EditOutlined />} />
         </Upload>
        </Space>
       );
      },
     },
   

     {
      title: "Thao tác",
      render: (text, record, id) => (
       <Space>
        <Popconfirm
      title="Bạn chắc chắn muốn xoá danh mục này này!"
      onConfirm={() => deleteCategory(record.id)}>
      <Button icon={<DeleteOutlined />} />
     </Popconfirm>
       </Space>
      ),
     },
    ];
    const onFinish = useCallback(
     (values) => {
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("slug", (values.slug ));
      formData.append("image", values.image.fileList[0].originFileObj);
      addCategory(formData);
     },
     [form]
    );
   
    return (
     <>
      <Space>
       <Space className="my-2" direction="vertical">
        <Button
         onClick={() => setOpenAddCategory(true)}
         icon={<PlusOutlined />}>
         Thêm danh mục
        </Button>
        {openAddCategory && (
         <Card>
          <Form onFinish={onFinish} labelCol={{ span: 12 }}>
           <Form.Item label="Tên danh mục" name="name">
            <Input />
           </Form.Item>
           <Form.Item label="Hình ảnh" name="image">
            <Upload
             fileList={fileList}
             beforeUpload={beforeUpload}
             onChange={onChangeFileList}>
             {!fileList.length && <Button icon={<UploadOutlined />} />}
            </Upload>
           </Form.Item>
           <Space>
            <Button onClick={() => setOpenAddCategory(false)}>
             Huỷ
            </Button>
            <Button htmlType="submit">Thêm</Button>
           </Space>
          </Form>
         </Card>
        )}
       </Space>
       <Button icon={<ReloadOutlined />} onClick={() => fetchCategory()}>
        Làm mói
       </Button>
      </Space>
      <Table
       dataSource={categories.category}
       columns={column}
       rowKey={(record) => Math.random()}
      />
     </>
    );
   }
   