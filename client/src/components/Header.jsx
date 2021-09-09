import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

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
  const [files, setFiles] = useState([]);

  // Register the plugin
  registerPlugin(FilePondPluginFileEncode);

  return (
    <div>
      <AppBar position='static' color='transparent' elevation={4}>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            <ImageAspectRatioIcon fontSize='large' className={classes.logo} />
            Image Gallery
          </Typography>

          <section className={classes.rightToolbar}>
            {/* ADD image(s) button */}
            <Tooltip title='Add'>
              <IconButton className={classes.actionBtn} component='label'>
                <FilePond
                  files={files}
                  onupdatefiles={setFiles}
                  allowMultiple={true}
                  name='files'
                  stylePanelLayout='circle'
                  dropOnPage={true}
                  onaddfile={(err, file) => {
                    // TODO -> Add image src to MongoDB and render it
                    console.log(file.getFileEncodeDataURL());
                  }}
                  allowFileEncode={true}
                />
                <AddCircleIcon />
              </IconButton>
            </Tooltip>

            {/* DELETE image(s) button */}
            <Tooltip title='Delete'>
              <IconButton
                className={classes.actionBtn}
                // onClick={() => {
                //   files.map((file) => console.log(file.getFileEncodeDataURL()));
                // }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>

            {/* EDIT image(s) button */}
            <Tooltip title='Edit'>
              <IconButton className={classes.actionBtn}>
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
