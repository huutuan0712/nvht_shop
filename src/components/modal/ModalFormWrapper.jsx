import { Modal } from "antd";

import React from "react";
import { useResetFormOnCloseModal } from "../../hook/useRestFormModal";
ModalFormWrapper.defaultProps = {
 visible: false,
};
export default function ModalFormWrapper({
 visible,
 children,
 onHide,
 onSubmit,
 okeText,
 cancleText,
 form,
}) {
 useResetFormOnCloseModal({ form, visible });
 return (
  <Modal
   okText={okeText}
   cancelText={cancleText}
   visible={visible}
   onOk={onSubmit}
   onCancel={onHide}>
   {children}
  </Modal>
 );
}
