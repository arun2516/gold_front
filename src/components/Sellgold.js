
import React from 'react';
import {useNavigate} from "react-router-dom"
import { Footercontainer } from './Footer/Footercontainer';
import Navbar from './Navbar';
import gold from "../images/sell2.png"
import welcome from "../images/welcome2.jpg"
import goldsell1 from "../images/goldsell1.jpg"
import goldsell2 from "../images/goldsell2.jpg"
import goldsell3 from "../images/goldsell3.jpg"
import { Button,  Typography,Grid } from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import GroupsIcon from '@mui/icons-material/Groups';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { Box } from '@mui/system';



function Sellgold() {
    const history = useNavigate();
    const handleclick = ()=>{
        history("/contactus")
    }
    
  return (
    <div>
        <Navbar/>
        <div>
            <div style={{backgroundImage:`url(${gold})`,backgroundRepeat:"no-repeat", height:"80vh", backgroundSize:"cover"}}>
                <div style={{position:"absolute",marginTop:"10%", marginLeft:"52%"}}>
                <Typography style={{color:"goldenrod", fontSize:"30px"}}>Instant Cash For Your Gold</Typography>
                    <Typography style={{color:"white", fontSize:"30px"}}>To Know The Value For Your <span style={{color:"goldenrod"}}>Gold</span> Jewellery?</Typography>
                    <Button variant="contained" color="secondary" onClick={handleclick}>Contact-Us</Button>
                </div>
            </div>
            <div style={{display:"flex",height:"60vh", backgroundColor:"whitesmoke", paddingLeft:"10%", paddingRight:"10%"}}>
                <div style={{marginTop:"8%"}}>
                    <img  alt="" src={welcome} style={{borderRadius:"2%"}} />
                </div>
                <div style={{marginTop:"5%", marginLeft:"3%"}}>
                    <h3 style={{color:"goldenrod", marginBottom:"2%"}}>Why GOLDLING?</h3>
                    <h1 style={{marginBottom:"2%"}}>Unbeatable price for your Gold Jewellery</h1>
                    <Typography>GOLDLING Jewellery Limited (GJL) is a part of Arpa Group of Companies, having 9 years of gold business tradition. GJL has 20+ branches in Tamil Nadu and expanding its business operations rest of south Indian states. GJL is buying gold and silver jewels, bars, coins, and ornaments from the public and financial institutions.</Typography>
                    <h2 style={{marginTop:"1%"}}>GJL's Double Profit</h2>
                    <Typography style={{marginTop:"1%",marginBottom:"1%"}}>1.SELL YOUR GOLD JEWELLERY AT ONLINE PRICE</Typography>
                    <Typography style={{marginTop:"1%",marginBottom:"1%"}}>2.BUY GOLD JEWELLERY AT ANY TIME WITHOUT WASTAGE & MAKING CHARGES</Typography>
                    <Button style={{marginTop:"1%"}} variant="contained" color="secondary" onClick={handleclick}>Contact-Us</Button>

                </div>
            </div>
            <div>
                <h2 style={{textAlign:"center", marginTop:"5%"}}>OUR  <span style={{color:'goldenrod'}}>FEATURES</span></h2>
                <h3 style={{textAlign:"center", marginTop:"1%"}}>Checkout Our Leatest Features</h3>
                <div style={{margin:"50px"}}> 
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh",borderRight:"0.1px solid black", borderBottom:"0.1px solid black"}}>
                                <RequestQuoteIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography >Best Price For Your Gold</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh",borderRight:"0.1px solid black", borderBottom:"0.1px solid black"}}>
                                <GroupsIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography>Wide Branch Network</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh",borderRight:"0.1px solid black", borderBottom:"0.1px solid black"}}>
                                <SupportAgentIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography>24/7 Call Centre Services</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh", borderBottom:"0.1px solid black"}}>
                                <BookOnlineIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography>MOBILE PURCHASE UNITS</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh",borderRight:"0.1px solid black"}}>
                                <ManageAccountsIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography>Professional Service</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh",borderRight:"0.1px solid black"}}>
                                <HomeWorkIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography>Free Door Step Service</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh",borderRight:"0.1px solid black"}}>
                                <AccessibilityNewIcon style={{fontSize:"100px",color:"goldenrod"}}/>
                                <Typography>Honest Valuation</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"30vh"}}>
                                <AssuredWorkloadIcon style={{fontSize:"100px",color:"goldenrod"}} />
                                <Typography>Free Take Over Service</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div style={{marginTop:"180px"}}>
                <h2 style={{textAlign:"center", marginTop:"5%"}}>OUR  <span style={{color:'goldenrod'}}>PROCESS</span></h2>
                <h3 style={{textAlign:"center", marginTop:"1%"}}>Checkout Our Amazing Working Process</h3>

                <div style={{display:"flex",height:"60vh",marginTop:"5%", backgroundColor:"whitesmoke",paddingLeft:"10%", paddingRight:"10%"}}>
                <div >
                    <img alt="" src={goldsell1} style={{borderRadius:"2%", height:"80%", marginTop:"7%"}} />
                </div>
                <div style={{marginTop:"2%", marginLeft:"3%"}}>
                    <h3 style={{color:"goldenrod", marginBottom:"2%"}}>Selling your gold jewels, bars, coins at GJL is very simple. If you have gold or silver jewels on your hand, following is the process</h3>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>1.Call Toll free No 0000 000 0000 or give a missed call to 000 000 0000.</Typography>
                    <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>2.GJL Call Centre executives will call you immediately and speak to you.</Typography>
                    <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>3. If you ask for doorstep service, our Mobile Purchase Team will come to your doorstep at your convenient time or you can visit our branch in your area.</Typography> <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>4.Your jewels will be appraised and purchase price will be arrived at.</Typography> <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>5.Sign the sales agreement and get the Cash/ Cheque/ RTGS immediately.</Typography> <hr></hr>
                </div>
                </div>
                <div style={{display:"flex",height:"60vh",marginTop:"0%", backgroundColor:"whitesmoke",paddingLeft:"10%", paddingRight:"10%"}}>
                
                <div style={{marginTop:"2%", marginRight:"3%"}}>
                    <h3 style={{color:"goldenrod", marginBottom:"2%"}}>If you have pledged your gold jewels with a bank or NBFC, Please find out the approximate net amount (Interest + Principal) to release your jewels from bank</h3>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>1.Call Toll free No 0000 000 0000 or give a missed call to 000 000 0000.</Typography>
                    <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>2.GJL Call Centre executives will call you immediately and speak to you.</Typography>
                    <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>3. Provide the Bank or NBFC name, place and amount required to release your jewel. Pre-approval will be given immediately and tell your convenient time and day.</Typography> <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>4. Our team will come to the bank where you pledged jewels, verify the pledge receipt and approximate purchase price arrived, take over the agreement signed. On behalf of you and with your presence, the amount will be paid to the bank to redeem the jewels.</Typography> <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>5.Sign the sales agreement and get the balance Cash/ Cheque/ RTGS immediately.</Typography> <hr></hr>
                </div>
                <div >
                    <img alt="" src={goldsell2} style={{borderRadius:"2%", height:"80%", marginTop:"7%", marginLeft:"4%"}} />
                </div>
                </div>
                <div style={{display:"flex",height:"60vh",marginTop:"0%", backgroundColor:"whitesmoke",paddingLeft:"10%", paddingRight:"10%"}}>
                <div >
                    <img alt="" src={goldsell3} style={{borderRadius:"2%", height:"90%", marginTop:"7%"}} />
                </div>
                <div style={{marginTop:"7%", marginLeft:"4%"}}>
                    <h2 style={{color:"goldenrod", marginBottom:"2%"}}>Documents Required:</h2>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>Business Proof (Or)Working ID Card / Salary Slip / Bank Statement</Typography>
                    <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>Gas Bill - Rental House</Typography>
                    <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>EB Bill - Own House</Typography> <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>Aadhar Carded and purchase price will be arrived at.</Typography> <hr></hr>
                    <Typography style={{marginTop:"2%",marginBottom:"2%"}}>Driving License</Typography> <hr></hr>
                </div>
                </div>
            </div>
            <div style={{marginTop:"180px"}}>
            <h2 style={{textAlign:"center", marginTop:"5%"}}>CONTACT <span style={{color:'goldenrod'}}>US</span></h2>
                <h3 style={{textAlign:"center", marginTop:"1%"}}>Do You Have Any Questions?</h3>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"2%"}}>
                <Button variant="contained" color="secondary" onClick={handleclick} >Contact-Us</Button>
                </div>
            </div>

           
        </div>
        <Footercontainer/>
    </div>
  )
  
}

export default Sellgold;
