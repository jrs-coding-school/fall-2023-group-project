//** Import Statements
import { Card } from '@mui/material'
import {useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getPackId } from '../../utility/api';
//** Setup (define helper functions and variables here)

function PackDetails(props) {
    //** Destructure Props
    const {
  
    } = props
  
    //** State Variables
    const [data, setData] = useState(null)
    const {id} = useParams()
   useEffect(() => {
          getPackId(id)
          .then((result) => setData(result.data)) // set state when the data received
          .catch((err) => err) // return the error
        }, []) //replace dependencies with the state variable names you want to trigger a re-run
        
        // console.log(data)
        //component logic
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
      <Card className="character-details">
         <CardMedia
            title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.name} ({data.id})
          </Typography>
          <Typography>
            Price:{data.price} Code:{data.code} 
          </Typography>
        </CardContent>
      </Card> 
    )
  }
  export default PackDetails
  