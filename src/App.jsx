import styles from './App.module.css';
import { useState, useRef } from 'react';

const sendData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});
	const [errorEmail, setErrorEmail] = useState('');
	const submitButtonRef = useRef(null);

	const emailHandler = ({ target }) => {
		const regEmail =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

		setFormData({ ...formData, email: target.value });
		if (!regEmail.test(String(target.value).toLowerCase())) {
			setErrorEmail('Некорректный email');
		} else {
			setErrorEmail('');
		}
	};

	const passwordHendler = ({ target }) => {
		setFormData({ ...formData, password: target.value });
		if (target.value.length > 12) {
			setErrorEmail('Пароль должен быть короче');
		} else {
			setErrorEmail('');
		}
	};

	const repeatPasswordHendler = ({ target }) => {
		setFormData({ ...formData, repeatPassword: target.value });
		if (target.value.length > 12) {
			setErrorEmail('Пароль должен быть короче');
		} else {
			setErrorEmail('');
		}
	};

	const blurHandler = ({ target }) => {
		if (target.value.length < 3) {
			setErrorEmail('Должно быть больше 3х символов');
		}
		if (formData.repeatPassword !== formData.password) {
			setErrorEmail('Пароли не совпадают');
		}
	};

	if (formData.email !== '' && formData.repeatPassword === formData.password) {
		submitButtonRef.current.focus();
	}

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(formData);
		setFormData({ ...formData, email: '', password: '', repeatPassword: '' });
	};

	return (
		<div className={styles.app}>
			<h1>Регистрация</h1>
			<form onSubmit={onSubmit}>
				{errorEmail && <div className={styles.errorLabel}>{errorEmail}</div>}
				<input
					type="email"
					name="email"
					placeholder="Почта"
					value={formData.email}
					onChange={emailHandler}
					onBlur={blurHandler}
				/>
				<input
					type="password"
					name="password"
					placeholder="Пароль"
					value={formData.password}
					onChange={passwordHendler}
					onBlur={blurHandler}
				/>
				<input
					type="password"
					name="repeatPassword"
					placeholder="Повторите пароль"
					value={formData.repeatPassword}
					onChange={repeatPasswordHendler}
					onBlur={blurHandler}
				/>
				<button ref={submitButtonRef} type="submit" disabled={errorEmail !== ''}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
