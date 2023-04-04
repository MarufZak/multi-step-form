import React from 'react';
import styled from 'styled-components';

const Step = ({ step = 1, title, isActive = false }) => {
  if (typeof step !== 'number') {
    console.error('Wrong type for step');
  }

  return (
    <Wrapper isActive={isActive}>
      <div className="round">{step}</div>
      <div className="content">
        <span className="step-num">step {step}</span>
        <h2 className="title">{title}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 33px auto;
  gap: 16px;

  text-transform: uppercase;
  font-size: 1.4rem;

  .round {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) =>
      props.isActive ? 'var(--color-light-blue)' : 'transparent'};
    color: ${(props) =>
      props.isActive ? 'var(--color-marine-blue)' : 'var(--color-white)'};

    border-style: solid;
    border-color: var(--color-white);
    border-width: ${(props) => (props.isActive ? 0 : '1px')};
  }

  .step-num {
    color: var(--color-light-blue);
  }

  .title {
    color: var(--color-white);
    margin-top: 4px;
    font-size: inherit;
    letter-spacing: 1px;
  }
`;

export default Step;
