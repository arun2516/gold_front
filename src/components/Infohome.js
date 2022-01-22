import "../App.css"
import { CardContent, Typography } from "@mui/material"
import { Box, width } from "@mui/system"
import { Card } from "@mui/material"
import React from "react"
import getSymbolFromCurrency from 'currency-symbol-map';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeTable1 from "./HomeTable1"
import HomeTable2 from "./HomeTable2"
import Dchart from "./Dchart"



let inr = getSymbolFromCurrency('INR');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let today = new Date();
let date = today.getDate()+"th"+ " "+monthNames[(today.getMonth())]+" "+today.getFullYear();

function Infohome(props){
    const {response} = props;
    let f ;
    let s ;
    let data_24;
    let data_22;
    let days;

    
    response.filter((data)=>{
        if(data.state === "India"){
            f = data.today[0];
            s = data.today[1];
            days = data.days;
            data_24 = data.data24;
            data_22 = data.data22;
            
        }
    })

   
    return(
        <div className="infohome">
            <div className="stickcards">
            <div className="heading">
                <Breadcrumbs separator="›"><h5>Home</h5><h5>Gold Rate</h5></Breadcrumbs>
                <h1>Gold Price In INDIA</h1>
                <p>Last Updated: {date}</p>
            </div>
            <div className="cards">
                <Box className="lcards">
                    <Card style={{backgroundColor:"#0559ae", color:"white"}}>
                        <CardContent >
                            <Typography variant="h6" className="cardcontent">{inr}{f}
                                </Typography> 
                                <Typography className="cardcontent">24 Carat Gold Rate (10 grams)
                                </Typography> 
                        </CardContent>
                    </Card>
                </Box>
                <Box className="rcards">
                    <Card style={{backgroundColor:"#0559ae", color:"white"}}>
                        <CardContent >
                            <Typography variant="h6"  className="cardcontent">{inr}{s}
                                </Typography> 
                                <Typography className="cardcontent">22 Carat Gold Rate (10 grams)
                                </Typography> 
                        </CardContent>
                    </Card>
                </Box>
            </div>
            </div>
            <div className="heading_2">
                <h2>24 Carat Gold Price In INDIA Today</h2>
            </div>
            <HomeTable1 f={f}/>
            <div className="heading_2">
                <h2>22 Carat Gold Price In INDIA Today</h2>
            </div>
            <HomeTable2 s={s}/>
            <Dchart days={days} data1={data_24} data2={data_22}/>
            
        </div>
    )

}

export default Infohome