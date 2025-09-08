import Button from '../../components/Button/Button';
import InputText from '../../components/InputSearch/InputText';
import Title from '../../components/Title/Title';
import styles from './Login.module.css';


export const Login = () => (
    <div className={styles.login}>
        <Title>Вход</Title>
        <InputText icon='search-normal.svg' placeholder='Ваше имя'/>
        <Button>Войти в профиль</Button>
    </div>
);