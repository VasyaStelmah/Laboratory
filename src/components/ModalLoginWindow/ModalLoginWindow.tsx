import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode,
};
export default function ModalLoginWindow({ children }: Props) {
  const el: HTMLDivElement = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });
  return (
    ReactDOM.createPortal(children, el)
  );
}