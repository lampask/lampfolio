import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Intro, SEO } from '../components';
import { Layout, Header, Footer, About, Projects } from '../layouts';
import ProTypes from 'prop-types';

const Index = ({ data }) => {
	const search = useRef();

	const getSearchRef = () => {
		return search;
	};

	return (
		<Layout>
			<SEO />
			<Helmet title={'Lampask'} />
			<Intro />
			<Header projRef={getSearchRef} />
			<About />
			<Projects ref={search} data={data} />
			<Footer />
		</Layout>
	);
};

Index.propTypes = {
	data: ProTypes.object,
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
