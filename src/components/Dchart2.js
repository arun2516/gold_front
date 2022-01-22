import { Line } from "react-chartjs-2"

function Dchart2(props){
    let {data,carat,place,days}=props;
    
    const data1={
        labels:days,
        datasets:[{
            data:data,
            backgroundColor:"#0559ae",
            borderColor:"black",
            borderWidth:1
        }]
    }
    
    return(
        <div>
            <div className="heading_2">
                <h2>Daily {carat} Gold Rate In {place} (15 Days)</h2>
            </div>
            <div style={{margin:"0 auto",height:"90%", width:"90%"}} >
                <Line data={data1} />
            </div>
           
            
        </div>
    )
}

export default Dchart2