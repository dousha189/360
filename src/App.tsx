import { useEffect, useRef } from 'react';
import { appHtml } from './appHtml';
import { initApp } from './appInit';

export default function App() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    initApp();
  }, []);

  return (
    <div
      id="app-root-inner"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: appHtml }}
    />
  );
}

