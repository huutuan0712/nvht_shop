;
import React from "react";
 import StoreProvider from "../../app/store";
import CartProvider from "../../hook/useCart";
import CategoryProvider from "../../hook/useCategory";
import { LoadingProvider } from "../../hook/useLoading";
import ProductProvider from "../../hook/useProduct";

export default function Compose(props) {
   
 const { children } = props;

 return (
  <>
   {[
     StoreProvider,
    LoadingProvider,
    ProductProvider,
    CategoryProvider,
     CartProvider,
   ].reduceRight((acc, Comp) => {
    return <Comp>{acc}</Comp>;
   }, children)}
  </>
 );
}
