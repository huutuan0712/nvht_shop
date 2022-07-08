
import React, { useEffect, useState } from "react";
import _findIndex from "lodash/findIndex";
// import { RadioChangeEvent } from "antd";
export default function useDetail(size) {
 const [maxQuantity, setMaxQuantity] = useState(0);
 const onChangeSize = (e) => {
  const idx = _findIndex(
   size,
   (n) => n.size === (e.target).value
  );
  setMaxQuantity(qty);
 };

 useEffect(() => {
  setMaxQuantity(qty);
 }, [size]);

 return {
  maxQuantity,
  onChangeSize,
 };
}
