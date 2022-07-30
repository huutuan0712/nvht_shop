import { Input, Modal } from "antd";
import useEffectSkipFisrtRender from "../../hook/useEffectSkipFisrtRender";
import React from "react";
import "./Search.scss";
import useSearch from "./useSearch";

export default function Search(props) {
 const { onHide, visible } = props;
 const { setText, mapProduct, setProduct } = useSearch(onHide);
 useEffectSkipFisrtRender(() => {
  if (!visible) {
   setText("");
   setProduct([]);
  }
 }, [visible]);

 return (
  <Modal
   className="search"
   title="Tìm kiếm"
   footer={false}
   width="50%"
   visible={visible}
   onCancel={() => onHide()}>
   <Input.Search
    size="large"
    placeholder="Nhập vào đây để tìm kiếm sản phẩm"
    onChange={(e) => setText(e.target.value)}
   />
   <div className="search-list">{mapProduct}</div>
  </Modal>
 );
}
