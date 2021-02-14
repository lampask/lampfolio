import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background: #141414;
	display: flex;
`;

const Text = styled.div`
	width: 90%;
	font-size: 2.2vh;
	margin: auto;
	padding: 1rem 0;
	color: white;
	&:after {
		content: '';
		display: table;
		clear: both;
	}
	h1 {
		text-align: center;
	}
	.columns {
		column-count: 2;
	}
`;

const About = (props) => {
	return (
		<Wrapper id="about">
			<Text>
				<h1>About me</h1>
				<div className="columns">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum neque sapien, in sagittis
						lorem eleifend nec. Duis congue scelerisque magna, et laoreet lectus porttitor vitae. Vivamus ut
						purus convallis, euismod lectus vitae, accumsan sem. Vivamus lacus neque, dapibus quis dui
						vitae, convallis rutrum tortor. Pellentesque lorem eros, tincidunt eu aliquet non, sagittis
						malesuada justo. Aliquam in erat quis ligula tempor gravida a ac justo. Fusce id laoreet massa,
						sit amet aliquet orci. Aenean ut elit vitae leo interdum pharetra. Integer aliquet scelerisque
						nisl, malesuada tincidunt ante rutrum non. Morbi mattis, tortor nec cursus ultricies, dolor ante
						efficitur orci, in faucibus augue ante nec metus. In eget rutrum odio, et euismod quam. Nullam
						maximus odio vitae porta tempor. Sed convallis ligula eleifend ligula scelerisque pharetra.
						Aenean quis turpis a risus viverra gravida sit amet non felis. Aliquam vel congue nisl, eget
						congue quam. Cras pretium hendrerit tortor id cursus. Phasellus semper laoreet elit ut
						pellentesque. Mauris euismod, mi et aliquet ultrices, tellus mi elementum nibh, eget sagittis
						urna urna at enim. Vestibulum luctus tortor vitae libero maximus accumsan. Ut tristique erat
						lacus, at tincidunt ipsum luctus et. Aliquam vitae varius ex. Aenean cursus volutpat purus, at
						posuere sapien. Praesent odio arcu, semper sit amet libero et, laoreet pretium nisl. In
						dignissim, augue in finibus eleifend, diam turpis dignissim augue, vel tempor purus lorem vel
						dolor. Integer quis blandit turpis, ac ornare mauris. In eget est nec enim rhoncus tincidunt
						vitae vel sem. Ut a tortor odio. Vestibulum vitae sollicitudin elit, et imperdiet urna. Donec id
						purus semper, tempus metus ac, sodales sem. Vivamus eu aliquam magna.
					</p>
					<p>
						Curabitur sodales lorem at nisi pellentesque suscipit. Morbi enim elit, tincidunt a dui nec,
						sollicitudin elementum sapien. Nam non purus vel est vestibulum lacinia ac ut orci. Vestibulum
						ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent varius,
						urna lacinia tincidunt facilisis, massa ipsum viverra quam, eget sagittis arcu dolor at dolor.
						Vestibulum sit amet gravida ex. Duis pretium metus in bibendum porta. Integer placerat nunc quis
						pretium accumsan. Maecenas lacus ex, rhoncus vel consectetur quis, elementum a augue. Quisque
						accumsan, nibh at blandit aliquet, ipsum est sagittis ex, a elementum elit diam congue enim. In
						massa mi, venenatis ut scelerisque eu, consectetur a sapien. Nunc malesuada tellus et dolor
						congue, ut iaculis lectus convallis. Duis dignissim velit ipsum, sed accumsan est rhoncus non.
						Donec diam ligula, fermentum commodo arcu et, convallis efficitur tellus. Ut commodo orci elit,
						a porta metus finibus sit amet. Maecenas sit amet molestie nibh. Mauris dui sem, dapibus eu
						massa ornare, sollicitudin vestibulum felis. In vitae ipsum quis libero lobortis molestie in at
						erat. Vivamus posuere, ipsum at volutpat volutpat, erat eros fringilla velit, at placerat velit
						velit vel diam. Etiam vel finibus elit, id egestas urna. Suspendisse potenti. Pellentesque
						malesuada mauris lacus, in lobortis ipsum sodales quis. Nullam sit amet maximus lacus, non
						sagittis enim. Proin interdum augue elit, eu feugiat dui faucibus id. Etiam eu turpis arcu.
					</p>
				</div>
				{props.children}
			</Text>
		</Wrapper>
	);
};

About.propTypes = {
	children: PropTypes.node,
};

export default About;
