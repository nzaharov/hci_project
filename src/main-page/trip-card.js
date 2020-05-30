import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  heartButton: {
    color: '#da42f5',
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const {trip} = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/public/logo192.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trip.name}
          </Typography>
  <Typography gutterBottom variant="h6" component="h4">by {trip.author}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {trip.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <FavoriteIcon htmlColor='#eb34db' />
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}