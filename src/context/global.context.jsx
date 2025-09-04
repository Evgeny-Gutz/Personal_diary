import { createContext , useState} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext({name: '', isLogined: false});

export const GlobalContextProvider = ({children}) => {
	const [dataUser, setContextDataUser] = useState({name: '', isLogined: false});

	return (
		<GlobalContext.Provider value={{dataUser, setContextDataUser}}>
			{children}
		</GlobalContext.Provider>);
};