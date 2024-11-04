import React, {useContext} from 'react';
import './App.css';
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3"
import { Stepper,StepLabel,Step } from '@mui/material';
import { multiStepContext } from './StepContext';

function App() {

  const {currentStep, finalData}= useContext(multiStepContext);

  function showStep(step){
    console.log(step);
    switch(step){
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
          return <Step3 />
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Add Requirement</h1>
        <div className='center-stepper'>
          <Stepper style={{width:'18%'}} activeStep={currentStep-1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        <Step1 />
        { showStep(currentStep)}
      </div>
    </div>
  );
}

export default App;
