import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../images/slider-2 (1).jpg"
import slider2 from "../images/slider-2 (2).jpg"
import slider3 from "../images/slider-2 (3).jpg"
import slider4 from "../images/slider-2 (4).jpg"


function Imageslider() {
let settings = {
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1,
    autoplay:true
}
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={slider1} alt="gold-market"/>
            </Wrap>
            <Wrap>
                <img src={slider2} alt="gold-market"/>
            </Wrap>
            <Wrap>
                <img src={slider3} alt="gold-market"/>
            </Wrap>
            <Wrap>
                <img src={slider4} alt="gold-market"/>
            </Wrap>
           
        </Carousel>
    )
}

export default Imageslider

const Carousel = styled(Slider)`
margin-top: 0px;
z-index:-1;
overflow: hidden;

ul li button{
    &:before{
        font-size: 10px;
        color:white;
    }
}
li.slick-active button:before{
    color: white;
}
.slick-list{
    overflow:hidden;
}
button{
    z-index:1;
}
`
const Wrap = styled.div`
cursor: pointer;
img{
    border:4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover{
        border:4px solid rgba(249, 249, 249, 0.8);
    }
}
`