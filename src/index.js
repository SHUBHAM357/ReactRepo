import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { Provider } from 'react-redux';
import store from './stores/configureStore';
import Home from './components/Home';


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));

//ReactDOM.render(<Home />,document.getElementById('root'));

