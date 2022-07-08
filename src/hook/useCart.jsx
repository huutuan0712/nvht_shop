import { unwrapResult } from "@reduxjs/toolkit";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _findIndex from "lodash/findIndex";
import _isEmpty from "lodash/isEmpty";
import {
 createContext,
 useContext,
 useEffect,
 useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
// import useState from "react-usestateref"; // see this line
import { getAllCartAction, getPreviewAction } from "../features/cart/cart.action";
import { setCart } from "../features/cart/cart.slice";
import { useLoading } from "./useLoading";
const CartContext = createContext({});
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
 const { voucher, preview, carts } = useSelector(state=>state.cart);
 const [myCart, setMyCart] = useState([]);
 const [test, setTest, testRef] = useState();
 const { user } = useSelector(state=>state.auth);
 const dispatch = useDispatch();
 const loading = useLoading();
 const [data, setData] = useState([]);
//  const { socket } = useSocket();
//  const navigate = useNavigate();

 useEffect(() => {
  setTest(preview);
 }, [preview]);

 useEffect(() => {
  getPreviewCart();
 }, [carts, voucher]);

 const addCart = (cart) => {
  let copy = !_isEmpty(carts) ? _cloneDeep(carts) : [];
  const idx = _findIndex(
   carts,
   (n) =>
    n.idProduct === cart.idProduct && n.size === cart.size
  );
  if (idx !== -1) {
   copy[idx].quantity += cart.quantity;
   dispatch(setCart(copy));
  } else {
   copy.push({ ...cart, size: cart.size });
   dispatch(setCart(copy));
  }
 };
 const getPreviewCart = () => {
  dispatch(getPreviewAction({ carts}))
   .then(unwrapResult)
   .then((res) => {
    dispatch(setPreview(res?.data));
   });
 };

 const updateQuantity = (
  idProduct,
  size,
  quantity
 ) => {
  if (!quantity) {
   const copy = _filter(
    _cloneDeep(carts),
    (n) => n.idProduct !== idProduct
   );
   dispatch(setCart(copy));
   return;
  }

  const idx = _findIndex(
   carts,
   (n) => n.idProduct === idProduct && n.size === size
  );
  if (carts[idx].quantity) {
   const copy = _cloneDeep(carts);
   copy[idx].quantity = quantity ;
   dispatch(setCart(copy));
  } else {
   const copy = _filter(
    carts,
    (n) => n.idProduct === idProduct
   );
   dispatch(setCart(copy));
  }
 };
 const removeCart = (idProduct, size) => {
  let copy = _cloneDeep(carts);
  const idx = _findIndex(copy, (n) => {
   return n.size === size && n.idProduct === idProduct;
  });
  let remove = [];
  copy.forEach((it, index) => {
   if (index !== idx) remove.push(it);
  });
  dispatch(setCart(remove));
 };

//  const getMycart = () => {
//   loading?.show();
//   dispatch(getCartUserAction({ id: user?._id }))
//    .then(unwrapResult)
//    .then((res) => {
//     setMyCart(res);
//    })
//    .finally(() => loading?.hide());
//  };

 const getAllCart = () => {
  loading?.show();
  dispatch(getAllCartAction({}))
   .then(unwrapResult)
   .then((res) => {
    setData(res);
   })
   .finally(() => loading?.hide());
 };

 
 return {getAllCart}
}
