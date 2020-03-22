import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();

// const render = () =>
ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
// @ts-ignore
// if (module.hot) {
// @ts-ignore
//   module.hot.accept('./App', () => {
//     render();
//   });
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
