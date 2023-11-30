import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import props from 'prop-types';


export default function YuCard() {
  const {
    name
    } = props
  
    //define state
    const [data, setData] = useState(null)
    // http://localhost:9000/${name}
    useEffect(() => {
      fetch(`http://localhost:9000/${name}`)
        .then((response) => {
          if (!response.ok) {
            return
          }
          return response.json()
        })
        .then((body) => {
          // console.log(body)
          setData(body)
        })
    }, [])
      if (!data) { // guard clause to prevent runtime errors
    return ( 
      <div>
        <h1>Cards</h1>
        <div>Loading...</div>
      </div>
      )
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="baseline"
    >
      {data.map((element) => {
        return (
          <Link to="/">
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea style={{backgroundColor: "blue"}}>
                <CardMedia
                  component="img"
                  height="250"
                  image={element.image}
                  alt="Pot of Greed"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )
      })}
    </Grid>
  );
}