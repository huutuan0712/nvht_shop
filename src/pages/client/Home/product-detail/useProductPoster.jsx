import { unwrapResult } from "@reduxjs/toolkit";
import { getProductDetailAction } from "../../../../features/product/product.action";
import {
 createContext,
 useContext,
 useEffect,
 useState,
} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLoading } from "../../../../hook/useLoading";
const ProductDetailContext = createContext(
 {}
);
export const useProductDetail = () =>
 useContext(ProductDetailContext);
export default function ProductDetailProvider({ children }) {
 const { id } = useParams();
 const loading = useLoading();
 const dispatch = useDispatch();
//  const [comment, setComment] = useState([]);
 const [posters, setPosters] = useState([]);
 const [detail, setDetail] = useState({});
//  console.log(posters,detail);
 const fetchDetail = () => {
  loading?.show();
  dispatch(getProductDetailAction(id ))
   .then(unwrapResult)
   .then((res) => { 
    // console.log(res);
    setDetail(res.product);
    setPosters(res.product.image);
    // setComment(res.product.description);
   })
   .finally(() => loading?.hide());
 };
 useEffect(() => {
  fetchDetail();
 }, [id]);
 return (
  <ProductDetailContext.Provider
   value={{
    fetchDetail,
    // comment,
    posters,
    detail,
   }}>
   {children}
  </ProductDetailContext.Provider>
 );
}
