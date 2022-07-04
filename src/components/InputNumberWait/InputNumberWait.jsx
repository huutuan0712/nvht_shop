import { InputNumber } from "antd";
// import { IProduct } from "constants/models/product.model";
// import { useProduct } from "hook/useProduct";
import React, { useCallback, useState } from "react";
import _debounce from "lodash/debounce";
import useEffectSkipFisrtRender from "../../hook/useEffectSkipFisrtRender";


export default function InputNumberWait({
 data,
 max,
 addonAfter,
 fn,
}) {
 const [value, setValue] = useState(data || 0);

 const onUpdate = useCallback(
  _debounce(() => update(), 500),
  [value]
 );
 const update = () => {
  fn(value);
 };
 useEffectSkipFisrtRender(() => {
  onUpdate();
  return onUpdate.cancel;
 }, [value, onUpdate]);

 return (
  <InputNumber
   onChange={(value) => {
    setValue(value);
   }}
   min={1}
   max={max}
   defaultValue={value}
   addonAfter={addonAfter}
  />
 );
}
