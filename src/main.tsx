import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GlobalContextProvider } from './context/global.context.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './layouts/Home/Home.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Favorites } from './pages/Favorites/Favorites.tsx';
import { Movie } from './pages/Movie/Movie.tsx';
import { SearchFilms } from './pages/SearchFilms/SearchFilms.tsx';
import axios from 'axios';

const rootElement = document.getElementById('root') as HTMLElement;

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/',
				element: <SearchFilms/>,
			},
			{
				path: '/login',
				element: <Login/>,
			},
			{
				path: '/movie/:id',
				element: <Movie/>,
				loader: async ({params}) => {
					const data = await axios.get(`https://search.imdbot.workers.dev/?tt=${params.id}`);
					return data;
				},
			},
			{
				path: '/favorites',
				element: <Favorites/>,
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
