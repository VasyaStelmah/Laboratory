import { useEffect } from 'react';
import ReactDOM from 'react-dom';
type PortalProps = {
  children: React.ReactNode,
}
export default function ModalLoginWindow({children}:PortalProps) {
	let el: HTMLDivElement  = document.createElement('div');
	useEffect(() => {
		document.body.appendChild(el);
		return () => {
			document.body.removeChild(el);
		}
	});
	return (
		ReactDOM.createPortal(children, el)
	)
}