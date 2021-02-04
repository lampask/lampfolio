import React from 'react';
import Image from 'gatsby-image';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
} from '@material-ui/core';
import './Dialog';

class Project extends React.Component {
  constructor(props) {
    this.dialogRef = React.createRef();
    this.title = props.title;
    this.description = props.description;
    this.imageData = props.imageData;
  }

  render() {
    <Card>
      <CardActionArea onClick={this.dialogRef.handleClickOpen}>
        <CardMedia component="div" title={this.title}>
          <Image fluid={this.imageData} alt={this.title} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{this.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CustomDialog ref={this.dialogRef} />
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>;
  }
}

export default Project;
