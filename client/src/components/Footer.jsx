import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  createdBy: {
    fontSize: '12px',
    marginBottom: '5px',
    marginTop: '20px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        align='center'
        color='textSecondary'
        className={classes.createdBy}
      >
        Created by Christian El-Hamaoui
      </Typography>
    </div>
  );
}

export default Footer;
