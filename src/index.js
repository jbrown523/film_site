import React from 'react';
import ReactDOM from 'react-dom'; // Document Object Model

import App from './App';

// 1st: Component we want to render
// 2nd: Triggers dev with ID of 'root'
// 3rd: Injects 'app' into the root div
ReactDOM.render(<App />, document.getElementById('root'));