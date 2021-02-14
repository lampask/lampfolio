import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import LinkIcon from '@material-ui/icons/Link';
import ListSubheader from '@material-ui/core/ListSubheader';
import Img from 'gatsby-image';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  // Shows or hide the Dialog
  handleToggle = () => this.setState({ open: !this.state.open });

  // Closes the dialog
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          maxWidth="lg"
          fullWidth={true}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {this.props.title}
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <Img
                      alt={this.props.title}
                      imgStyle={{ objectFit: 'cover' }}
                      sizes={{ ...this.props.cover }}
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Description" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="README" />
                  </ListItem>
                </List>
                <Divider />
                <List
                  component="nav"
                  aria-label="links-list"
                  aria-labelledby="links-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="links-list-subheader">
                      Links
                    </ListSubheader>
                  }
                >
                  <ListItem>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="https://www.lol.yeet/" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="https://www.lol2.yeet/" />
                  </ListItem>
                </List>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs="auto">
                <Paper>xs=9</Paper>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
