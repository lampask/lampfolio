import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Intro, SEO } from '../components';
import { Layout, Header, Footer, About, Projects } from '../layouts';

const Index = ({ data }) => {
  const speakers = data.allGoogleSpreadsheetData.edges;
  return (
    <Layout>
      <SEO />
      <Helmet title={'Lampask'} />
      {/* <Intro /> */}
      <Header />
      <About />
      <Projects data={data} />
      <Footer />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query DataQuery {
    allGoogleSpreadsheetData {
      nodes {
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
            fluid(quality: 100, maxWidth: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;