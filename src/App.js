import React from 'react';
import './App.css';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atelier-cave-dark.css'

function App() {
  return (
    <div className="App">
      <Highlight language="javascript">
      {`valid('wrong zipcode').validateEitherList([
  Left(['Must have numbers']),
  Right(''),
]); // => Invalid('', ['Must have numbers'])`}
      </Highlight>
    </div>
  );
}

export default App;
