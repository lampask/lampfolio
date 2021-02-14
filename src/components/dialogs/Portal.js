import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

const Portal = ({ children }) => {
	const el = typeof document !== `undefined` ? document.createElement('div') : null

	useEffect(() => {
		portalRoot.appendChild(el);
		return () => {
			portalRoot.removeChild(el);
		};
	}, []);


    if (el) {
    	return createPortal(children, el);
    } else {
    	return null;
	}
};

Portal.propTypes = {
	children: PropTypes.node,
};

export default Portal;