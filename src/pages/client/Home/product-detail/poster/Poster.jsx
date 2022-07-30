import { Image } from "antd";


import React from "react";
import Slider from "react-slick";
import { useProductDetail } from "../useProductPoster";
import "./Poster.scss";

export default function Poster() {
 let { posters } = useProductDetail();
 if (typeof posters === 'string') {
     posters = JSON.parse(posters);
 }


 const config= {
  slidesToScroll: 1,
  slidesToShow: 1,
  dots: true,
  arrows: false,
  dotsClass: "dot-group",
  customPaging: (i) => <img src={posters[i]} alt="" />,
 };
 return (
  <Slider {...config} className="posters">
   {posters.map((it) => (
    <Image key={Math.random()} src={it} width="100%" />
   ))} 
  </Slider>
 );
}
