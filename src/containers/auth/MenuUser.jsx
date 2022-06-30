import { Menu } from 'antd';
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



export default function MenuUser() {
  const categories = useSelector((state) => state.category.categories);
  
   
   const mapMenu = () => {
    if (categories)
    return categories.map((it) => (
      <Menu.Item key={Math.random() + idx}>
        <Link to={`/product/nsx/${it.path}`}>{it.name}</Link>
     </Menu.Item>
    ));
    else return null;
    }
   return (
    <Menu theme="dark" mode="inline">
     {mapMenu}
    </Menu>
    
   );
}
