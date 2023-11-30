// ** Material UI
import { Box, Typography} from '@mui/material'
import YuCard from './card'

function CardCatalog (props) {
  return (
    <Box>
        <Typography variant={'h3'}>
            Card Catalog
        </Typography>
        <YuCard/>
    </Box>
  )
}

export default CardCatalog
