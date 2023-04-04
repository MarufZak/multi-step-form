import React from 'react';
import styled from 'styled-components';

const availableButtonTypes = ['primary', 'secondary', 'tertiary'];

const ButtonBase = styled.button`
  text-transform: capitalize;
  border: none;
  padding: 14px 24px 16px 25px;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ButtonPrimary = styled(ButtonBase)`
  background-color: var(--color-marine-blue);
  color: var(--color-white);

  :hover {
    background-color: var(--color-blue);
  }
`;

const ButtonSecondary = styled(ButtonBase)`
  background-color: transparent;
  color: var(--color-cool-gray);

  :hover {
    color: var(--color-marine-blue);
  }
`;

const ButtonTertiary = styled(ButtonBase)`
  background-color: var(--color-purplish-blue);
  color: var(--color-white);

  :hover {
    opacity: 0.7;
  }
`;

const buttonTypes = {
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
  tertiary: ButtonTertiary,
};

const Button = ({ children, type = 'primary', ...props }) => {
  if (!availableButtonTypes.includes(type)) {
    const errorMessage = `Incorrect type for Button component: ${type} , Expected: ${availableButtonTypes}`;
    console.error(errorMessage);
  }

  const Tag = buttonTypes[type];

  return (
    <Tag type={type} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
