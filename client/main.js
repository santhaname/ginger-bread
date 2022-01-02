import React from 'react';
import ReactDOM from 'react-dom';
import App from 'client/app';
ReactDOM.hydrate(
    <React.StrictMode>
        <App name={'from'}/>
    </React.StrictMode>, 
    document.getElementById('root')
    );