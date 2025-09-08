import { createContext , useState, type ReactNode} from 'react';
import type { GlobalContextType } from './global.context.props';

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<GlobalContextType>({
	dataUser: { name: '', isLogined: false },
	setContextDataUser: () => {}
});

export const GlobalContextProvider = ({children}: {children: ReactNode}) => {
	const [dataUser, setContextDataUser] = useState({name: '', isLogined: false});

	return (
		<GlobalContext.Provider value={{dataUser, setContextDataUser}}>
			{children}
		</GlobalContext.Provider>);
};