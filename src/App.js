import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState();
	const [list, setList] = useState([]);
	const [error, setError] = useState();
	const [showText, setShowText] = useState(true);
	const [isValueVaild, setIsValueVaild] = useState(true);

	let promptValue;
	let id = Date.now();
	const text = <p className={styles['no-margin-text']}>Нет добавленных элементов</p>;

	const onInputButtonClick = () => {
		promptValue = prompt('Введите значение');

		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			onOpenButton();
		} else {
			setValue(promptValue);
			setError('');
			onOpenButton();
		}
	};

	const onAddButtonClick = () => {
		if (value.length >= 3) {
			const updatedList = [...list, { id, value }];
			setList(updatedList);
			setValue('');
			setError('');
			onClick();
		}
	};

	const onClick = () => {
		if (list.length === 0) {
			setShowText(!showText);
		}
	};

	const onOpenButton = () => {
		if (promptValue.length < 3) {
			setIsValueVaild(!isValueVaild);
		} else {
			setIsValueVaild(true);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			<div className={styles.error}>{error}</div>
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{showText && text}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li className={styles['list-item']} key={id}>
							{value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
