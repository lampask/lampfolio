import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from '../components';
import { Layout } from '../layouts';
import { Grid } from '@material-ui/core';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 2rem 1rem 2rem;
  @media (max-width: 1000px) {
    margin: 2rem 0.5rem 0.5rem 1rem;
  }
  @media (max-width: 700px) {
    margin: 2rem 0.5rem 0.5rem 0.5rem;
  }
`;

const Index = ({ data }) => {
  // const { edges } = data.allMarkdownRemark;
  const speakers = data.allGoogleSpreadsheetData.edges;
  return (
    <Layout>
      <Helmet title={'Lol'} />
      <Header title="Lol">Portfolio go brrrrrrr</Header>
      <Grid container justify="center">
        {speakers.map(({ node }) => (
          <PostWrapper>
            <Grid item key={node.title}>
              <PostList
                key={node.id}
                cover={node.productImage.childImageSharp.fluid}
                path={node.link}
                title={node.title}
                excerpt={node.description}
                tags={node.tags ? node.tags.split(',') : null}
                lang={node.language}
              />
            </Grid>
          </PostWrapper>
        ))}
      </Grid>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query DataQuery {
    allGoogleSpreadsheetData {
      edges {
        node {
          id
          title
          description
          slug
          link
          language
          participants
          tags
          image
          productImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
