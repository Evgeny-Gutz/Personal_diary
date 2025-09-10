import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputText from '../../components/InputSearch/InputText';
import Title from '../../components/Title/Title';
import { GlobalContext } from '../../context/global.context';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';
import styles from './Login.module.css';
import { useContext, type FormEvent } from 'react';

type InputName = {
    name: {
        value: string;
    }
}

interface User {
	name:string; 
	isLogined: boolean;
}

export const Login = () => {
    const [data, saveData] = useLocalStorage<User[]>('Users');
    const {setContextDataUser} = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const handleIn = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & InputName;
        if(data === undefined) {
            alert('База пользователей пуста');
            return;
        }

        const hasUser = data.some(el => el.name === target.name.value);
        if(hasUser) {
            setContextDataUser({
                name: target.name.value,
                isLogined: true
            });
            saveData(data.map(user => {
                if(user.name === target.name.value) {
                    user.isLogined = true;
                }
                return user;
            }))
            alert('Вы успешно авторизоались!');
            navigate('/');
        } else {
            alert('Такой пользователь не сущестует!');
        }
    };

    return (
    <form className={styles.login} onSubmit={handleIn}>
        <Title>Вход</Title>
        <InputText icon='search-normal.svg' placeholder='Ваше имя' name='name'/>
        <Button>Войти в профиль</Button>
    </form>
    );
};