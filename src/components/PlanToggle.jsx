import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';

const PlanToggle = () => {
  const { billingFrequency, setBillingFrequency } = React.useContext(AppContext);
  const handleInputChange = (e) => {
    if (e.target.checked) {
      setBillingFrequency('yr');
    } else {
      setBillingFrequency('mo');
    }
  };

  return (
    <Wrapper>
      <span className={`plan ${billingFrequency === 'mo' ? 'active' : ''}`}>
        monthly
      </span>
      <input
        onChange={handleInputChange}
        checked={billingFrequency === 'yr'}
        type="checkbox"
      />
      <span className={`plan ${billingFrequency === 'yr' ? 'active' : ''}`}>
        yearly
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 13px;
  border-radius: 8px;
  background-color: var(--color-alabaster);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .plan {
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-cool-gray);

    &.active {
      color: var(--color-marine-blue);
    }
  }

  input[type='checkbox'] {
    width: 38px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--color-marine-blue);
    appearance: none;
    position: relative;
    transition: 0.3s;

    ::before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--color-white);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4px;
      transition: inherit;
    }

    &:checked::before {
      left: 22px;
    }
  }
`;

export default PlanToggle;
