import React from 'react';
import styled from 'styled-components';

const InputWithLabel = ({ label, type = 'text', ...props }, ref) => {
  const id = React.useId();

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input {...props} type={type} required={true} ref={ref} id={id} />
      <span className="error-msg">Invalid credentials</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  :has(:invalid),
  :has(:not(:placeholder-shown):invalid) {
    --color: var(--color-strawberry-red);
    --error-color: var(--color-strawberry-red);
  }

  :has(:placeholder-shown),
  :has(:valid) {
    --color: var(--color-cool-gray);
    --error-color: var(--color-white);
  }

  :has(:focus) {
    --color: var(--color-purplish-blue);
  }

  ::placeholder {
    font-weight: 400;
  }

  label {
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: var(--color-marine-blue);
    text-transform: capitalize;
  }

  input {
    padding: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color);
    outline: none;
    color: var(--color-marine-blue);
    font-weight: 700;
  }

  .error-msg {
    position: absolute;
    font-size: 1.4rem;
    color: var(--error-color);
    right: 0;
  }
`;

export default React.forwardRef(InputWithLabel);
