import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      minWidth:345
    },
    media: {
      height: 140,
    },
  });
  const Div = styled.div`
  display:flex;
  justify-content: center;
  margin:4%;
  width:100%;
  min-width:300px
  `;

  
const GithubCards = props => {
    const classes = useStyles();
return (
    <Div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        <p>Location: {props.location}</p>
        <p>Profile: {props.profile}</p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
          {props.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.url}
        </Button>
      </CardActions>
    </Card> 
    </Div>  
)
};
export default GithubCards