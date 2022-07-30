import { unwrapResult } from "@reduxjs/toolkit";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _findIndex from "lodash/findIndex";
import _isEmpty from "lodash/isEmpty";
import React, {
 createContext,
 useContext,
 useEffect,
 useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
// import useState from "react-usestateref"; // see this line
import { changeStatusAction, createCartAction, DeleteCartAction, getAllCartAction, getCartTotalAction, getCartUserAction, getPreviewAction, myOrderAction, payWithPaymenMoMotAction, payWithPaymentAction, updateCartAction } from "../features/cart/cart.action";
import { setCart, setPreview } from "../features/cart/cart.slice";
import { toastError, toastSuccess } from "../utils/toast";
import { useLoading } from "./useLoading";


const CartContext =React.createContext({});
export const useCart = () => useContext(CartContext);
export default function CartProvider({ children }) {
 const {preview,  carts } = useSelector(state=>state.cart);
 const [url, setUrl] = useState();
 const [myCart, setMyCart] = useState([]);
 const [total, setTotal] = useState();;
 const { user } = useSelector(state=>state.auth);
 const dispatch = useDispatch();
 const loading = useLoading();
 const [data, setData] = useState([]);
 const [Order, setMyOrder] = useState([]);

 const addCart = (cart) => {
  let copy = !_isEmpty(carts) ? _cloneDeep(carts) : [];
  const idx = _findIndex(
   carts,
   (n) =>
    n.idProduct === cart.idProduct 
  );
  if (idx !== -1) {
   copy[idx].qty += cart.qty;
   dispatch(setCart(copy));
  } else {
   copy.push({ ...cart });
   dispatch(setCart(copy));
  }
 };
 
 const createCart = (create)=>{
  loading?.show();
  dispatch(createCartAction(create))
  .then(unwrapResult)
  .then((res) =>{
    toastSuccess(res.message);
    getMycart();
    getPreviewCart();
    getCartTotal()
    dispatch(setCart(res))
    
  })
  .catch((error) => {
    console.log(error.message);
    toastError(error.message);
  })
     .finally(() => loading?.hide());
 };
 
 const getPreviewCart =  () => {
  loading?.show();
  dispatch(getPreviewAction({id:user.id || undefined }))
   .then(unwrapResult)
   .then((res) => {
    setMyCart(res)
   })
  .finally(() => loading?.hide());
 };
 const getCartTotal =  () => {
  loading?.show();
  dispatch(getCartTotalAction({id:user.id || undefined }))
   .then(unwrapResult)
   .then((res) => {
    setTotal(res)
   })
  .finally(() => loading?.hide());
 };

 const updateQuantity = (quantity) => {
  dispatch(updateCartAction(quantity))
  .then((res) => {
    toastSuccess(res.message);
     console.log(res);
    getMycart();
    getPreviewCart();
    getCartTotal()
   })
   .catch((error) => {
    toastError(error.message);
    console.log(error.message);
  })
}
 const removeCart = (cart) => {

  dispatch(DeleteCartAction(cart))
  .then(unwrapResult)
  .then((res) => {
    toastSuccess(res.message);
   getMycart();
   getPreviewCart();
   getCartTotal()
  })
  .catch((error) => {
    console.log(error.message);
    toastError(error.message);
  })
 };
 const paidWithoutPaypal = (data)=>{
  
  loading?.show();
  dispatch( payWithPaymentAction(data))
   .then(unwrapResult)
   .then((res) => {
     setData(res);
     getMycart();
     getPreviewCart();
     getCartTotal()
   })
     .finally(() => loading?.hide());
 }

 const paidWithoutMomo = ()=>{
  dispatch( payWithPaymenMoMotAction({id:user?.id}))
  .then(unwrapResult)
  .then((res) => setUrl(res))
  .catch((error) => {
    console.log(error.message);
 })
}

 const getMycart =  () => {
    loading?.show();
  dispatch(getCartUserAction({id: user.id || undefined}))
   .then(unwrapResult)
   .then((res) => {
      dispatch(setPreview(res))
   })
     .finally(() => loading?.hide());
 };
 const getAllCart =  () => {
  loading?.show();
  dispatch(getAllCartAction())
   .then(unwrapResult)
   .then((res) => {
    setData(res)
   })
  .finally(() => loading?.hide());
 };
 const changeStatusAdmin = (data)=>{
  loading?.show();

  dispatch(changeStatusAction(data))
   .then(unwrapResult)
   .then((res) => {
   toastSuccess(res.message)
   getAllCart()
   })
   .catch((error) => {
    console.log(error.message);
    toastError(error.message);
  })
  .finally(() => loading?.hide());
 }
 const getMyOrder =  () => {
  loading?.show();
  dispatch(myOrderAction({id:user?.id}))
   .then(unwrapResult)
   .then((res) => {
      // console.log("🚀 ~ file: useCart.jsx ~ line 165 ~ .then ~ res", res)
       setMyOrder(res)
   })
  .finally(() => loading?.hide());
 };
   useEffect(() => {
    getPreviewCart()
    getAllCart()
    getMycart();
    paidWithoutMomo()
   }, []);
 
 return (
  <CartContext.Provider
   value={{
    url,
    paidWithoutMomo,
    Order,
    getMyOrder,
    changeStatusAdmin,
    getAllCart,
    updateQuantity,
    paidWithoutPaypal,
    getCartTotal,
    addCart,
    getPreviewCart,
    createCart,
    myCart,
    data,
    total,
    removeCart,
    getMycart
   }}>
   {children}
  </CartContext.Provider>
 );

}
