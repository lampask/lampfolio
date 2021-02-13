import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const getYearDifference = (date) => {
	return (Date.now() - date) / 31556952000;
};

const Counter = (props) => {
	const [timer, setTimer] = useState(getYearDifference(props.birthday));

	useEffect(() => {
		const interval = setInterval(() => setTimer(getYearDifference(props.birthday)), 10);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <span style={props.style}> {timer.toString().slice(0, 12)} </span>;
};

Counter.propTypes = {
	birthday: PropTypes.objectOf(Date),
	style: PropTypes.object,
};

export default Counter;
