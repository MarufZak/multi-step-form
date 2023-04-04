import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import Button from './Button';

const Controls = () => {
  const { info, currentStep, setCurrentStep, currentPlan } =
    React.useContext(AppContext);
  let isButtonDisabled;

  if (currentStep === 1) {
    isButtonDisabled = !info.name || !info.email || !info.phone;
  } else if (currentStep === 2) {
    isButtonDisabled = !currentPlan.price;
  }

  return (
    <Wrapper step={currentStep}>
      {currentStep !== 1 && (
        <Button
          onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
          className="prev-btn"
          type="secondary"
        >
          Go Back
        </Button>
      )}
      <Button
        onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
        disabled={isButtonDisabled}
        className="next-btn"
      >
        Next Step
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 16px;
  width: 100%;
  grid-column: 2 / 3;
  display: flex;
  justify-content: ${(props) => (props.step !== 1 ? 'space-between' : 'flex-end')};
`;

export default React.memo(Controls);
