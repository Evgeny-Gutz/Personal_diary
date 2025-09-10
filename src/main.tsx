import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GlobalContextProvider } from './context/global.context.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './layouts/MainLayout/MainLayout.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Favorites } from './pages/Favorites/Favorites.tsx';
import { Movie } from './pages/Movie/Movie.tsx';
import { SearchFilms } from './pages/SearchFilms/SearchFilms.tsx';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import axios from 'axios';

const rootElement = document.getElementById('root') as HTMLElement;

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/login',
				element: <Login/>,
			},
			{
				path: '/',
				element: <RequireAuth><SearchFilms/></RequireAuth>,
			},
			{
				path: '/movie/:id',
				element: <RequireAuth><Movie/></RequireAuth>,
				loader: async ({params}) => {
					const data = await axios.get(`https://search.imdbot.workers.dev/?tt=${params.id}`);
					return data;
				},
			},
			{
				path: '/favorites',
				element: <RequireAuth><Favorites/></RequireAuth>,
			}
		]
	},
]);

createRoot(rootElement).render(
	<StrictMode>
		<GlobalContextProvider>
			<RouterProvider router={router} />
		</GlobalContextProvider>
	</StrictMode>
);
