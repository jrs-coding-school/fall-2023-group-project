//** Import Statements
import { Button, Card, Grid } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {useState, useEffect, Fragment} from "react"
import { Link } from "react-router-dom"
//** Setup (define helper functions and variables here)

function PacksLog(props) {
    //** Destructure Props
    const {
  
    } = props
  
    //** State Variables
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:9000`)
        .then((response) => {
          if(!response.ok) {
            throw new Error('error fetching data!')
          }
          return response.json() // parse the response data
        })
        .then((result) => setData(result)) // set state when the data received
        .catch((err) => err) // return the error
      }, []) //replace dependencies with the state variable names you want to trigger a re-run
    //console.log(data)

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
        <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" >
        {data.map((element) => {
            return (
              <Grid item xs={4}>
                {/* <Link to={`/packdetails/${element.id}`}>   */}
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
                {/* </Link> */}
              </Grid>
            )
        })}
  </Grid>
    )
  }
  export default PacksLog