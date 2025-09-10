import { useContext, useEffect} from "react";
import NavBar from "../../components/NavBar/NavBar";
import { GlobalContext } from "../../context/global.context";
import { useLocalStorage } from "../../hooks/use-localstorage.hook";
import styles from './MainLayout.module.css';
import { Outlet, useNavigate } from "react-router";

interface User {
	name:string; 
	isLogined: boolean;
}

export const Home = () => {
        const {dataUser, setContextDataUser} = useContext(GlobalContext);
        const [users, setUsers] = useLocalStorage('Users');
        const navigate = useNavigate();
        
    
        useEffect(() => { // проверяем есть ли в localStorage залогиненный пользователь
            if(!Array.isArray(users) || users.length === 0) return;
    
            const hasUserLogin = users.find(user => user.isLogined);
            if(hasUserLogin) {
                setContextDataUser(hasUserLogin);
            }
        }, [setContextDataUser, users]);
    
        const handleOut = () => {
            if(!Array.isArray(users) || users.length === 0) return;
            const updateUsers = users.map(user => {
                return user.name === dataUser.name ? {...user, isLogined: false} : user;
            });
    
            setUsers(updateUsers);
            setContextDataUser((prev:User) => ({...prev, isLogined: false}));
        };
    
        const handleIn = () => {
            navigate('/login');
        };

    return(
        <>
            <div className={styles.home}>
                <NavBar name={dataUser.isLogined ? dataUser.name : ''} handleOut={handleOut} handleIn={handleIn} />
            </div>
            <Outlet />
        </>
    );
};