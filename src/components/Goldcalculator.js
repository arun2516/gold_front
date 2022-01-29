import {useEffect,useState} from "react"
import axios from "axios"
import getSymbolFromCurrency from 'currency-symbol-map';
import {Box, FormControl, MenuItem, InputLabel,Select, TextField, FormLabel,RadioGroup,FormControlLabel,Radio,Stack, Button,Card,CardContent,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
import Navbar from './Navbar';
import { Footercontainer } from "./Footer/Footercontainer";
import Dchart2 from "./Dchart2";

let inr = getSymbolFromCurrency('INR');


function Goldcalculator(){
    const [res,setres]=useState([]);
    const[city,setcity] = useState("");
    const[purity,setpurity]=useState("");
    const[gram,setgram]=useState();
    const[result,setresult]=useState();
    const[resstate,setresstate]=useState();
    const[respurity,setrespurity]=useState();
    const[resgram,setresgram]=useState();
    const[resval,setresval]=useState();
    const[data,setdata]=useState([]);
    const[days1,setdays1]=useState([]);

    let states=[];

    ///
    useEffect(async() => {
        var response = await axios.get("https://goldling.herokuapp.com/all/goldata");
        setres(response.data);
    }, [])

    ///
    res.map((elem)=>{
        states.push(elem.state);
    })

    

    const handleChange = (event) => {
        setcity(event.target.value);
      };

    const handleChange1 = (event)=>{
        setpurity(event.target.value);
    }

    const handleChange2 = (event)=>{
        setgram(event.target.value);
    }

    let f;
    let s;
    let data24;
    let data22;
    let days;
    const handlesubmit = (event)=>{
        event.preventDefault();
         res.filter((elem)=>{
            if(elem.state === city){
                f=elem.today[0];
                s=elem.today[1];
                data24=elem.data24;
                data22=elem.data22;
                days= elem.days
            }
        });
        setdays1(days);
        setresstate(city);
        setrespurity(purity);
        setresgram(gram);
        


        if(purity == "24Carat"){
            setresval(f);
            let value = (f/10) * gram ;
            setresult(value);
            setdata(data24);
        }else{
            setresval(s);
            setdata(data22)
            setresult((s/10)*gram);
        }

       
    }

    return(
        <div >
            <div style={{overflow:"hidden"}}>
            <Navbar/>
            <div className="heading_2">
                <h2>Gold Rate Calculator</h2>
            </div>
            <div className="goldcalcform">
            <Box sx={{ width:"80%", marginTop:"5%" ,paddingLeft:"10%",marginLeft:"10%",  marginBottom:"5%"}}>
                
                <FormControl component="form" onSubmit={handlesubmit} required>
                <Stack direction="row" spacing={2}>

                    <div className="selectcity">
                    <InputLabel id="demo-simple-select-label">city</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{width:"120px"}} value={city} label="city" onChange={handleChange} required>
                        {states.map((elem)=>(
                            <MenuItem value={elem}>{elem}</MenuItem>
                        ))}
                    </Select>
                    </div>
                    

                    <div>
                    <TextField id="outlined-name" label="Quantity(gram)" value={gram} onChange={handleChange2} required></TextField>
                    </div>
                    
                    <div>
                    <FormLabel id="demo-controlled-radio-buttons-group">Purity</FormLabel>
                    <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={purity} onChange={handleChange1} required>
                    <FormControlLabel value="24Carat" control={<Radio />} label="24Carat" />
                    <FormControlLabel value="22Carat" control={<Radio />} label="22Carat" />
                    </RadioGroup>
                    </div>

                    <div>
                        <Button variant="outlined" type="submit">
                            Calculate Price
                        </Button>
                    </div>

                    </Stack>
                    
                </FormControl>
            </Box>
            </div>
            <div className="rescard">
            <Box>
                    <Card style={{backgroundColor:"#0559ae", color:"white" ,width:"60%", marginLeft:"20%", marginRight:"20%"}}>
                        <CardContent >
                            <h3 style={{fontFamily:"Yeseva One", textAlign:"center",marginBottom:"10px"}} >{respurity} Gold rate for {resgram} Grams in  {resstate} </h3>
                            <h2   className="cardcontent">{inr}{result}</h2> 
                        </CardContent>
                    </Card>
                </Box>
            <div className="heading_2">
                <h2>{respurity} Gold Price In {resstate} Today</h2>
            </div>
            <div className="table">
            <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft:"10%" , border:"2px solid black"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table  aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Gram
                            </TableCell>
                            <TableCell align="center">
                                {respurity} Gold Price
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow  hover>
                            <TableCell align="center">1 Gram</TableCell>
                            <TableCell align="center">{resval/10}</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center">8 Grams</TableCell>
                            <TableCell align="center">{(resval/10)*8}</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center">10 Grams</TableCell>
                            <TableCell align="center">{resval}</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center">100 Grams</TableCell>
                            <TableCell align="center">{resval*10}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
            </div>
            <Dchart2 data={data} carat={respurity} place={resstate} days={days1}/>
            </div>
            </div>
            <div className="info" style={{margin:"10%"}}>
                <h1 style={{marginTop:"20px",marginBottom:"20px"}}>Know About Gold Price</h1>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>24 Carat Gold</h3>
                <Typography>Gold is deemed to be in its purest form at 24 carats. Pure gold or 24 carat gold signifies 99.9 percent purity and it doesn’t contain any other metals. The 24 carat gold is used to make gold coins, bars, etc. Various other purities for gold also exist and are measured in relativity to 24 carats.</Typography>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>22 Carat Gold</h3>
                <Typography>The 22 carat purity gold is ideal for jewellery making. It is 22 parts gold and two parts silver, nickel or any other metal. The mixing of other metals makes gold more stiff and appropriate for jewellery. The 22 carat gold often reflects 91.67 of gold purity.</Typography>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Gold Rate in Major Cities</h3>
                <Typography>Gold rates may vary from city to city based on various factors including demand, interests levied, octroi charges, state taxes, gold traders, bullion associations, transportation costs, making charges and other such.</Typography>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Factors Affecting Gold Price in India</h3>
                <Typography>Gold is one of the most popular investment tools worldwide, especially in India. Like other financial assets, the price of gold also keeps fluctuating. While demand for gold is one of the key factors that determines its market price, a gamut of other factors have a role too. Find below some of the factors affecting daily gold rates.</Typography>
                <ol style={{marginLeft:"5%"}}>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Demand</h3>
                    <Typography>Like any other commodity, demand and supply economics has a huge impact on gold prices. Increased demand with constrained or low supply usually results in a price hike. Similarly, an oversupply of gold with stagnant or weak demand can push the prices lower. In general, the demand for gold rises in India during the wedding and festive seasons.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Inflation</h3>
                    <Typography>A major part of gold demand in India comes from rural areas. This demand usually tends to escalate after a good monsoon, harvest, and resultant profits.</Typography>
                    </li>
                    
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Interest rates</h3>
                    <Typography>Gold and interest rates tend to have an inverse relationship. As the interest rates increase, people tend to sell off their gold to earn high interest. Similarly, when the interest rates decrease, people tend to buy more gold, thus increasing the demand.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Monsoon</h3>
                    <Typography>A major part of gold demand in India comes from rural areas. This demand usually tends to escalate after a good monsoon, harvest, and resultant profits</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Government Reserves</h3>
                    <Typography>Many governments have financial reserves that are composed primarily of gold, and India is no exception. However, if this reserve exceeds the gold sold by the government, the gold prices increase due to an insufficient supply. In India, this reserve is maintained by the Reserve Bank Of India.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Currency fluctuations</h3>
                    <Typography>Gold trade in the international market transacts in US dollars. During import, when the US dollars are converted to Indian rupees, the gold price fluctuates. Usually, if the Indian rupee depreciates, gold import turns to be costlier.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Correlation with other assets</h3>
                    <Typography>Gold has a low to negative correlation with all the major asset classes and thus, makes for a highly effective portfolio diversifier. As per the experts, gold protects one's portfolio from volatility because the factors that affect the returns from most asset classes do not influence the price of gold much. Some even believe that as the shares of a company fall, an inverse correlation might develop between gold and equities.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Geopolitical factors</h3>
                    <Typography>During geopolitical turmoils, such as a war, the demand for gold tends to go up as a safe haven for parking funds. Thus, while a geopolitical turmoil negatively impacts the prices of most asset classes, it has a positive impact on gold prices.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Octroi charges and Entry tax</h3>
                    <Typography>Octroi charge and entry tax are local taxes levied by the tax authorities when goods enter their jurisdiction (state/city). Octroi is levied when the goods enter a city, whereas Entry tax is levied when the goods enter a state. Furthermore, if your gold is valued at more than Rs. 30 lakhs, a wealth tax is levied on it.</Typography>
                    </li>
                    <li>
                    <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Making charges</h3>
                    <Typography>Making charges are usually levied on gold jewellery and may differ from piece-to-piece, depending on the design, as well as from jeweller-to-jeweller.</Typography>
                    </li>
                </ol>
                <h2 style={{marginTop:"30px",marginBottom:"15px"}}>Gold Weight Conversion Table</h2>
                <Typography>Refer to the following table to find out the value of gold in different units. Gold is often measured in grams, kilograms, troy ounce, bhats, and tonnes.</Typography>
                <div>
                    <TableContainer component={Paper} sx={{marginTop:"20px"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell align="center">To Convert From</TableCell>
                            <TableCell align="center">To</TableCell>
                            <TableCell align="center">Multiply By</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">Troy Ounces</TableCell>
                                <TableCell align="center">Grams</TableCell>
                                <TableCell align="center">31.1035</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Troy Ounces</TableCell>
                                <TableCell align="center">Grains</TableCell>
                                <TableCell align="center">480</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Kilograms</TableCell>
                                <TableCell align="center">Try Ounces</TableCell>
                                <TableCell align="center">32.1507</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Grams</TableCell>
                                <TableCell align="center">Try ounces</TableCell>
                                <TableCell align="center">0.032151</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Kilograms</TableCell>
                                <TableCell align="center">Tolas</TableCell>
                                <TableCell align="center">85.755</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Kilograms</TableCell>
                                <TableCell align="center">Bahts</TableCell>
                                <TableCell align="center">68.41</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>
            <Footercontainer/>
            
        </div>
    )
}

export default Goldcalculator;