import { Line } from "react-chartjs-2"

// const data = {
//     labels:["january","february","march","april","may","june"],
//     datasets:[{
//         data:[4500,4325,4335,4350,4400,4410],
//         backgroundColor:"rgba(255,99,132,0.5)",
//         borderColor:"rgba(255,99,132,1)",
//             // "rgba(54,162,235,0.5)",
//             // "rgba(255,206,86,0.5)",
//             // "rgba(75,192,192,0.5)",
//             // "rgba(153,102,255,0.5)",
//             // "rgba(255,159,64,0.5)",
//         // borderColor:"rgba(255,99,132,1)",
//             // "rgba(54,162,235,1)",
//             // "rgba(255,206,86,1)",
//             // "rgba(75,192,192,1)",
//             // "rgba(153,102,255,1)",
//             // "rgba(255,159,64,1)"
    
//         borderWidth:1
//     }]
// }

function Dchart(props){
    let {data1,data2,days}=props;
    console.log(data1);
    console.log(data2)
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