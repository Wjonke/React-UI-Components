import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import './App.css';
 




const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay buttonStyle='display' text={0}/>
      <div className='buttons'>
        <div className="numbers">
          <ActionButton buttonStyle={'clearBtn'} text={'clear'}/>
          <NumberButton buttonStyle={'number'} text={7} />
          <NumberButton buttonStyle={'number'} text={8} />
          <NumberButton buttonStyle={'number'} text={9} />
          <NumberButton buttonStyle={'number'} text={4} />
          <NumberButton buttonStyle={'number'} text={5} />
          <NumberButton buttonStyle={'number'} text={6} />
          <NumberButton buttonStyle={'number'} text={1} />
          <NumberButton buttonStyle={'number'} text={2} />
          <NumberButton buttonStyle={'number'} text={3} />
          <ActionButton buttonStyle={'zero'} text={0}/>
        </div>
        <div className="mathOperators">
          <NumberButton buttonStyle={'math'} text='&#247;' />
          <NumberButton buttonStyle={'math'} text='&#xd7;' />
          <NumberButton buttonStyle={'math'} text='&#x2212;' />
          <NumberButton buttonStyle={'math'} text='&#x2b;' />
          <NumberButton buttonStyle={'math'} text='&#x3d;' />
        </div>
      </div>
    </div>
  );
};

export default App;