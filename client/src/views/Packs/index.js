//** Import Statements
import { Card, Grid } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {useState, useEffect, Fragment} from "react"
import { Link } from "react-router-dom"
import { getAllPacks } from "../../utility/api";
import Pagination from '@mui/material/Pagination';
//** Setup (define helper functions and variables here)

function Packs(props) {
    //** Destructure Props
    const {
  
    } = props
  
    //** State Variables
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(20);
    const handleChange = (event, value) => {
      setPage(value);
    };  

    useEffect(() => {
        getAllPacks({page: page, limit: limit})
        .then((result) => {
          console.log(result)
          setData(result.data)
          setTotal(parseInt(result.total))
        }) // set state when the data received
        .catch((err) => err) // return the error
      }, [page]) //replace dependencies with the state variable names you want to trigger a re-run
    
      // console.log(data)
      console.log(page)
      //** Component Logic
      if (!data) { // guard clause to prevent runtime errors
        return ( 
          <div>
            <h1>Getting Pack Data</h1>
            <div>Loading...</div>
          </div>
          )
      }
    //** Return JSX
    return (
      <Fragment>
        <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" >
          {data.map((element) => {
              return (
                <Grid item xs={4}>
                  <Link to={`/packdetails/${element.id}`}>  
                    <Card>
                        <CardMedia
                      sx={{ height: 140 }}
                      title={element.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {element.name} ({element.id})
                      </Typography>
                      <Typography>
                      Price:{element.price} Code:{element.code} 
                      </Typography>
                    </CardContent>
                    </Card>
                  </Link>
                </Grid>
              )
          })}
        </Grid>         
        <Pagination count={Math.ceil(total/limit)} page={page} onChange={handleChange} />
      </Fragment>
    )
  }
  export default Packs