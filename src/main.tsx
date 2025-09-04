import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GlobalContextProvider } from './context/global.context.tsx';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
	<StrictMode>
		<GlobalContextProvider>
			<App />
		</GlobalContextProvider>
	</StrictMode>
);
