import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import NavBar from './layouts/Header/NavBar';
import InputText from './components/InputSearch/InputText';

function App() {
	const sayHello = () => {
		alert('Првиет!');
	};

	return (
		<div className='app'>
			<NavBar/>
			<InputText placeholder={'Введите название'} icon={'search-normal.svg'} onClick={sayHello} buttonText={'Искать'}/>
			<InputText placeholder={'Введите название'} onClick={sayHello} buttonText={'Войти в профиль'}/>
			<Title type='h3'>Войти в профиль</Title>
			<Button onClick={sayHello}>Я кнопка</Button>
			<Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing \n
        elit. Nesciunt consectetur inventore soluta asperiores pariatur, odit quas repellat quia corporis? Aut officia dolores commodi quisquam, blanditiis provident esse enim nobis recusandae!</Paragraph>
		</div>
	);
}

export default App;
