import { Grid} from "@material-ui/core";
import HighCart from "./HighCart";

function HighLight( {report}) {

    const data = report && report.length ? report[report.length - 1] : [];
    const summary =[
        {
            title :'Số ca nhiễm',
            count : data.Confirmed,
            type : 'confirmed'
        },
        {
            title :'Số ca khỏi',
            count : data.Active,
            type : 'active'
        },
        {
            title :'Số ca tử vong',
            count : data.Deaths,
            type : 'deaths'
        }
    ]

    

  return (
    <Grid container spacing={3}>
        {summary.map((sum,index)=>(
            <Grid key={index} item sm={4} xs={12}>  
                <HighCart  title={sum.title} count={sum.count} type={sum.type}></HighCart>
            </Grid>
        ))}
      
    </Grid>
  );
}

export default HighLight;
