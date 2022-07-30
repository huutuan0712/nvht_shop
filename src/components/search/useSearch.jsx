import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
   } from "react";
   import _debounce from "lodash/debounce";
  
   import { unwrapResult } from "@reduxjs/toolkit";
   import { Avatar, List, message, Result, Typography } from "antd";
   import useEffectSkipFisrtRender from "../../hook/useEffectSkipFisrtRender";
   import { useNavigate } from "react-router-dom";
   import Highlighter from "react-highlight-words";
    import { searchProductDetailAction } from "../../features/product/product.action";
    import { useDispatch } from "react-redux";
   export default function useSearch(onHide) {
    const [product, setProduct] = useState([]);
    let getProduct = product.products;
   

    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const onSearch = useCallback(
     _debounce(() => search(), 300),
     [text]
    );
    const mapProduct = useMemo(() => {
     if (getProduct)
      return (
       <List
        dataSource={getProduct}
        renderItem={(item) => (
         <List.Item
          onClick={() => {
           navigate(`product/detail/${item.id}`);
           onHide();
           setProduct([]);
          }}>
          <List.Item.Meta
           title={
            <Highlighter
             highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
             searchWords={[text]}
             autoEscapes
             textToHighlight={item.name}
            />
           }
           description={
            <Highlighter
             highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
             searchWords={[text]}
             autoEscapes
             textToHighlight={item.description.substring(0, 100) + "..."}
            />
           }
           avatar={
            <Avatar src={item.image[0]}  />
           }></List.Item.Meta>
         </List.Item>
        )}
       />
      );
    }, [getProduct]);
   
    const search = () => {
     dispatch(searchProductDetailAction(text))
      .then(unwrapResult)
      .then((res) => {
     setProduct(res);
      });
    };
    useEffectSkipFisrtRender(() => {
     onSearch();
     return onSearch.cancel;
    }, [text, onSearch]);
   
    return { onSearch, setText, setProduct, text, mapProduct };
   }
   