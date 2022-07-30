import { UploadFile } from "antd/lib/upload/interface";
import { useState } from "react";

export default function useUpload() {
 const [fileList, setFileList] = useState([]);
 
 const onRemove = (file) => {
  const index = fileList.indexOf(file);
  const newFileList = fileList.slice();
  newFileList.splice(index, 1);
  return true;
 };
 const beforeUpload = (file) => {
  
  setFileList([...fileList,file]);
  return false;
 };

 const onChangeFileList = (f) => {
  setFileList(f.fileList);
 };
 return { onChangeFileList, fileList, beforeUpload, onRemove };
}