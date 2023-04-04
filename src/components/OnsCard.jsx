import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import checkmark from '../assets/images/icon-checkmark.svg';

const OnsCard = ({ id, title, desc, price, isActive }, ref) => {
  const { billingFrequency, ons, setOns } = React.useContext(AppContext);
  const inputId = `ons-card-${id}`;

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      const newOns = [...ons, { id, title, price }];
      setOns(newOns);
    } else {
      const newOns = ons.filter((item) => item.id !== id);
      setOns(newOns);
    }
  };

  price = billingFrequency === 'yr' ? price * 10 : price;
  return (
    <Wrapper htmlFor={inputId}>
      <input
        checked={isActive}
        onChange={handleCheckboxChange}
        id={inputId}
        type="checkbox"
        ref={ref}
      />
      <span className="checkbox">
        <img src={checkmark} alt="checkmark icon" />
      </span>
      <span className="title">{title}</span>
      <span className="desc">{desc}</span>
      <span className="price">
        +${price}/{billingFrequency}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  padding: 16px 24px 20px 24px;
  border-radius: 8px;
  border: 1px solid var(--color-purplish-blue);
  display: grid;
  grid-template: repeat(2, 1fr) / 20px 1fr auto;
  gap: 7px 24px;
  align-items: center;
  height: 80px;
  position: relative;

  .checkbox {
    grid-row: 1 / 3;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-purplish-blue);
  }

  input {
    position: absolute;
    inset: 0;
    appearance: none;
    cursor: pointer;
  }

  input:checked + .checkbox {
    background-color: var(--color-purplish-blue);
  }

  .title {
    color: var(--color-marine-blue);
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .desc {
    font-size: 1.5rem;
    color: var(--color-cool-gray);
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .price {
    color: var(--color-purplish-blue);
    font-size: 1.5rem;
    grid-row: 1 / 3;
  }
`;

export default React.forwardRef(OnsCard);
