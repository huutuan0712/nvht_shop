import { unwrapResult } from "@reduxjs/toolkit";
import { message, Modal } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { changePasswordAction, updateInformationdAction } from "../../features/auth/auth.action";

import { setLogOut, setUser } from "../../features/auth/auth.slice";
import { useLoading } from "../../hook/useLoading";
import { toastError, toastSuccess } from "../../utils/toast";

export default function useInfomation() {
const { user } = useSelector(state=>state.auth);
 const dispatch = useDispatch();
 const loading = useLoading();
 const navigate = useNavigate();
 const updatePassword = (update) => {
 
   dispatch(changePasswordAction(update))
   .then(unwrapResult)
   .then((res) => {
    toastSuccess(res.message)
    Modal.confirm({
     title: "Đổi mật khẩu thành công bạn có muốn đăng nhập lại không",
     okText: "Đăng nhập lại",
     cancelText: "Giữ tôi đăng nhập",
     onOk: () => {
      dispatch(setLogOut());
      navigate("/login");
     },
    });
   })
   .catch((err) => {
    loading?.hide();
    toastError(err.message)
   })
   .finally(() => loading?.hide());
 };
 const updateUser = (data, file) => {
 console.log("🚀 ~ file: useInformation.jsx ~ line 41 ~ updateUser ~ data, file", data, file)
  // loading?.show();
  let formData = new FormData();
  if (data) {
    for (const [key, value] of Object.entries(data)) {
     formData.append(key, value );
    }
   }
    if (file) {
     formData.append("image", file);
    }
  

  dispatch(
   updateInformationdAction({
    id:user?.id,
    name:data.name
   })
  )
   .then(unwrapResult)
   .then((res) => {
    dispatch(setUser(res));
   toastSuccess('Update User Success');
   })
   .catch((err) => {
    loading?.hide();
   toastError('Update User Error',err)
   })
   .finally(() => loading?.hide());
 };
 return { updateUser, updatePassword };
}
