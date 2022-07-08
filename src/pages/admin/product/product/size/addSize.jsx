import { Form, Input, InputNumber, Modal, Slider } from "antd";

// import { useResetFormOnCloseModal } from "hook/useResetFormModal";
// import { createRule } from "pages/client/cart/Payment";
import ModalFormWrapper from "../../../../../components/modal/ModalFormWrapper";

const SizeForm = ({visible,onCancel}) => {
 const [form] = Form.useForm();

 const onOk = () => {
  form.submit();
 };

 return (
  <ModalFormWrapper
   form={form}
   onHide={onCancel}
   onSubmit={onOk}
   visible={visible}>
   <Form form={form} layout="vertical" name="sizeForm">
    <Form.Item
     name="size"
     label="Size"
     rules={[{required: true, message: "Size không được để trống" }]}>
     <Input />
    </Form.Item>
    <Form.Item
     label={"Số lượng"}
     name="qty"
     rules={[{required: true, message: "Số lượng không được để trống" }]}>
     <InputNumber min={1} />
    </Form.Item>
   </Form>
  </ModalFormWrapper>
 );
};

export default SizeForm;
