import { Menu } from "antd";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function MenuUser() {
  const { category} = useSelector(state=>state.category.categories);

 const navigate = useNavigate();

 const mapMenu = useMemo(() => {
  if (category)
   return category.map((it) => (
      <Menu.Item key={it.id}>
       <Link to={`/product/category/${it.slug}`}>{it.name}</Link>
      </Menu.Item>
   ));
  else return null;
 }, [category]);
 return (
  <Menu theme="dark" mode="inline">
   {mapMenu}
  </Menu>
 );
}
