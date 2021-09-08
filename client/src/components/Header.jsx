import React from 'react';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ImageAspectRatioIcon from '@material-ui/icons/ImageAspectRatio';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#004c3f',
    marginLeft: 8,
    marginRight: 40,
    fontWeight: 700,
  },
  logo: {
    position: 'relative',
    top: theme.spacing.unit,
    marginRight: '5px',
  },
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  actionBtn: {
    '&:hover': {
      color: 'inherit',
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='static' color='transparent' elevation={4}>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            <ImageAspectRatioIcon fontSize='large' className={classes.logo} />
            Image Gallery
          </Typography>

          <section className={classes.rightToolbar}>
            <Tooltip title='Add'>
              <IconButton title='Add' className={classes.actionBtn}>
                <AddCircleIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title='Delete'>
              <IconButton aria-label='delete' className={classes.actionBtn}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title='Edit'>
              <IconButton aria-label='edit' className={classes.actionBtn}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
