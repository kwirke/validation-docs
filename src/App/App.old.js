import React from 'react';
import './App.css';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atelier-cave-dark.css'
import {IoMdClipboard, IoLogoGithub} from 'react-icons'
// const 

const App = () => (
    <div className="App">
      <Highlight className="javascript">
      {`import Validation from '@rexform/validation';

const isNotEmpty = str => str.length > 0;
const hasNumbers = str => /[0-9]/.test(str);

const notEmptyValidator = Validation.fromPredicateOr('Can\`t be empty', isNotEmpty),
const hasNumbersValidator = Validation.fromPredicateOr('Must have numbers', hasNumbers),

Validation.of('123456')
    .chain(notEmptyValidator)
    .chain(hasNumbersValidator)
    // => Valid('123456')

Validation.of('wrong zipcode')
    .chain(notEmptyValidator)
    .chain(hasNumbersValidator)
    // => Invalid(['Must have numbers'], 'wrong zipcode')`}
      </Highlight>
    </div>
)

export default App;
