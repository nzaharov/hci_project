import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxHeight: '380px',
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  heartButton: {
    color: '#da42f5',
  },
  likeCount: {
    marginLeft: '5px',
    opacity: '70%'
  },
  description: {
    overflowWrap: 'break-word',
    height: '2.7rem',
    overflowY: 'hidden'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { trip } = props;
  const [liked, setLiked] = useState(trip.liked);
  const history = useHistory();

  const setLikedExtension = () => {
    if (!liked) {
      trip.likes++
    } else {
      trip.likes--;
    }
    setLiked(!liked);
  }

  const reroute = () => history.push({ pathname: 'trip', state: { trip } });

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={reroute}>
        <CardMedia
          component="img"
          alt="Trip thumnail"
          height="140px"
          image={`${process.env.PUBLIC_URL}/images/${trip.thumbnail}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trip.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">by {trip.author}</Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {trip.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={setLikedExtension}>
          {liked
            ? <FavoriteIcon htmlColor='#ff524c' />
            : <FavoriteBorderIcon htmlColor="#ff524c" />}
          <span className={classes.likeCount}>{trip.likes}</span>
        </Button>
      </CardActions>
    </Card>
  );
}