import { useEffect } from 'react';
import ReactDOM from 'react-dom';
export default function ModalLoginWindow(props) {
	let el = document.createElement('div');
	useEffect(() => {
		document.body.appendChild(el);
		return () => {
			document.body.removeChild(el);
		}
	});
	return (
		ReactDOM.createPortal(props.children, el)
	)
}