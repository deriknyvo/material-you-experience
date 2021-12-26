import Card from '@mui/material/Card';
import {
  Button,
  CardActions,
  CardContent,
  Container,
  Typography
} from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
