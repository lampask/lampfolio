import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
} from '@material-ui/core';
import ProjectDialog from '../components/dialogs/ProjectDialog';

const Wrapper = styled.article`
  margin-bottom: 2rem;
  position: relative;
  z-index: 100;
  border-radius: ${(props) => props.theme.borderRadius.default};
  box-shadow: ${(props) => props.theme.shadow.feature.small.default};
  transition: ${(props) => props.theme.transitions.boom.transition};

  max-width: 15vw;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.feature.small.hover};
    transform: scale(1.02);
  }

  @media only screen and (max-width: 1400px) {
    max-width: 25vw;
  }

  @media only screen and (max-width: 800px) {
    max-width: 35vw;
  }

  @media only screen and (max-width: 550px) {
    max-width: 80vw;
  }
`;

class PostList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleDialog = () => {
    this.refs.dialogReference.handleToggle();
  };

  render() {
    return (
      <Fragment>
        <Wrapper>
          <Card>
            <CardActionArea onClick={this.handleDialog}>
              <CardMedia component="div" title={this.props.title}>
                <Img
                  alt={this.props.title}
                  imgStyle={{ objectFit: 'cover' }}
                  sizes={{ ...this.props.cover, aspectRatio: 21 / 9 }}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {this.props.title}
                </Typography>
                <Typography component="p">{this.props.excerpt}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {this.props.tags
                ? this.props.tags.map((tag) => (
                    <Chip size="small" label={tag} />
                  ))
                : null}
            </CardActions>
            <CardActions>
              <Typography component="small">{this.props.lang}</Typography>
            </CardActions>
          </Card>
        </Wrapper>
        <ProjectDialog
          ref="dialogReference"
          title={this.props.title}
          cover={this.props.cover}
        />
      </Fragment>
    );
  }
}

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired,
};
