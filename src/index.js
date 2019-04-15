import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));