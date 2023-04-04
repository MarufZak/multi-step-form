import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';

const PlanCard = ({ id, isActive, icon, title, price }, ref) => {
  const { billingFrequency, setCurrentPlan } = React.useContext(AppContext);

  price = billingFrequency === 'yr' ? price * 10 : price;
  return (
    <Wrapper
      htmlFor={id}
      onClick={() => setCurrentPlan({ id, title, price })}
      isActive={isActive}
    >
      <input ref={ref} defaultChecked={isActive} type="checkbox" id={id} />
      <img src={icon} alt={`icon ${title}`} />
      <h2 className="title">{title}</h2>
      <span className="price">
        ${price}/{billingFrequency}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  width: 100%;
  padding: 20px 16px 16px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  position: relative;

  input[type='checkbox'] {
    position: absolute;
    inset: 0;
    appearance: none;
    border-radius: 8px;
  }

  .title {
    color: var(--color-marine-blue);
    font-weight: 500;
    margin-bottom: 7px;
    margin-top: 40px;
  }

  .price {
    color: var(--color-cool-gray);
    font-size: 1.4rem;
  }

  border-color: ${(props) =>
    props.isActive ? 'var(--color-purplish-blue)' : 'var(--color-light-gray)'};
  background-color: ${(props) =>
    props.isActive ? 'var(--color-alabaster)' : 'transparent'};
`;

export default React.forwardRef(PlanCard);
