import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  imageCard: {
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

export default function ImageGallery(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.imageCard}>
        <CardMedia
          image={props.imageSrc}
          altcomponent='img'
          alt={props.imageTitle}
        />
      </Card>
    </div>
  );
}
