import logo from './logo.svg';
import './App.css';
import { TimerBlock } from './components/timerBlock';
import { createElement } from 'react';

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement('p', {}, 'Edit <code>src/App.js</code> and save to reload.'),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			<TimerBlock />,
		),
	);
};
