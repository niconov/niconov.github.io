import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './index'


const list = document.getElementById("list")
const addCircleBtn = document.getElementById("ADD_CIRCLE")

addCircleBtn.addEventListener('click', () => {
	store.dispatch({type: "ADD_CIRCLE", payload: Math.random() })
});


const initState = [
	"dod",
	"cat"
];

function figures( state = initState, action) {
	switch (action.type) {
		case 'ADD_CIRCLE':
			return [...state, action.payload]
		default:
			return state
	}
}


const store = createStore(figures)

let a = (<Provider store={store}>
	<App />
</Provider>)
console.log(a);

window.onload = () => {
	console.log("document.getElementById('root')");

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
}
// store.subscribe( () => {
// 		list.innerHTML = ''
// 		store.getState().map( i => {
// 			const li = document.createElement('li');
// 			li.textContent = i;
// 			list.appendChild(li);
// 		});
// });
