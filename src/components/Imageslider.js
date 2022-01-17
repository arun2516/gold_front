import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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
                <img src="https://media.istockphoto.com/photos/american-currency-dollar-and-gold-ingot-combinations-close-up-for-picture-id1285637350?b=1&k=20&m=1285637350&s=170667a&w=0&h=52Let5iZctI-FWVeOCvZCN5Bf_KzbO3vQ4rCxhNdR-o=" alt="gold-market"/>
            </Wrap>
            <Wrap>
                <img src="https://media.istockphoto.com/photos/double-explosure-with-businesss-charts-of-graph-and-rows-of-coins-for-picture-id1051617040?b=1&k=20&m=1051617040&s=170667a&w=0&h=p5AUoSgjGMTZRCSqx2aSxCbm3HQWA3wRBCB121nDxtc=" alt="gold-market"/>
            </Wrap>
            <Wrap>
                <img src="https://media.istockphoto.com/photos/global-gold-price-commodity-concept-picture-id891624642?b=1&k=20&m=891624642&s=170667a&w=0&h=vA8t5quM4Lu6w2tl2P_PequJHzFQNPVkfRliGtNiYII=" alt="gold-market"/>
            </Wrap>
            <Wrap>
                <img src="https://media.istockphoto.com/photos/window-display-of-jewelry-shop-picture-id482058527?b=1&k=20&m=482058527&s=170667a&w=0&h=AD2nwDBKwo0hUXgEvQDslsZmc_B5jVx2NU-rrduPhwE=" alt="gold-market"/>
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