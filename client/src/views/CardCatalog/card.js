import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import {useState, useEffect, Fragment} from 'react'
import { getAllCards } from "../../utility/api";
import Pagination from '@mui/material/Pagination';


export default function YuCard() {
  
    //define state
    const [data, setData] = useState(null)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(20)

    const handleChange = (event, value) => {
      setPage(value);
    };  

    useEffect(() => {
      getAllCards({page: page, limit: limit})
        .then((body) => {
          // console.log(body)
          setData(body.data)
          setTotal(body.total)
        })
    }, [page])

  if (!data) { // guard clause to prevent runtime errors
    return ( 
      <div>
        <h1>Cards</h1>
        <div>Loading...</div>
      </div>
      )
  }

  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="baseline"
      >
        {data.map((element) => {
          return (
            <Link to={`/cards/${element.id}`}>
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
      <Pagination count={Math.ceil(total/limit)} page={page} onChange={handleChange} />
    </Fragment>
  );
}