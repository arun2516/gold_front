import { Line } from "react-chartjs-2"


function Dchart(props){
    let {data1,data2,days}=props;
   
    const data24={
        labels:days,
        datasets:[{
            data:data1,
            backgroundColor:"#0559ae",
            borderColor:"black",
            borderWidth:1
        }]
    }
    const data22={
        labels:days,
        datasets:[{
            data:data2,
            backgroundColor:"#0559ae",
            borderColor:"black",
            borderWidth:1
        }]
    }
    return(
        <div>
            <div className="heading_2">
                <h2>Daily 24K Gold Rate In INDIA(15 Days)</h2>
            </div>
            <div style={{margin:"0 auto",height:"90%", width:"90%"}} >
                <Line data={data24} />
            </div>
            <div className="heading_2">
                <h2>Daily 22K Gold Rate In INDIA(15 Days)</h2>
            </div>
            <div style={{margin:"0 auto",height:"90%", width:"90%"}} >
                <Line data={data22}/>
            </div>
            
        </div>
    )
}

export default Dchart