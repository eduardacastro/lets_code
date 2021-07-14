import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentsApp';
import App2 from './componentsApp2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App2 title="Título">
    Conteúdo
    </App2>
    <App2 title="Título2">
    Conteúdo2
    </App2>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
