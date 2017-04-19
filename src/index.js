import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';

 // Create a new component. This produces some HTML

 const App = () => {

   return (
    <div className="body">
      <Keypad />
    </div>
  );
 }

 // Take this compoent's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
