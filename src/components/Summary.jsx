import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import SectionHeaderWrapper from '../components/SectionHeaderWrapper';
import useFocusOnMount from '../hooks/useFocusOnMount';
import Button from './Button';
import Confirm from './Confirm';

const title = 'Finishing up';
const description = 'Double-check everything looks OK before confirming.';

const Summary = () => {
  const buttonRef = useFocusOnMount();
  const { ons, billingFrequency, currentPlan, setCurrentStep } =
    React.useContext(AppContext);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  if (isConfirmed) {
    return <Confirm />;
  }

  const billing = billingFrequency === 'yr' ? 'year' : 'month';
  const totalPrice = ons.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, currentPlan.price);
  return (
    <SectionHeaderWrapper title={title} description={description}>
      <Panel>
        <div className="checklist">
          <div className="plan">
            <h2 className="title">
              {currentPlan.title} <span className="freq">({billing}ly)</span>
            </h2>
            <button
              ref={buttonRef}
              className="link"
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
            <span className="price">
              ${currentPlan.price}/{billingFrequency}
            </span>
          </div>
          <div className="line"></div>
          <ul className="ons">
            {ons.map((item) => {
              return (
                <div key={item.id} className="item">
                  <h2 className="title">{item.title}</h2>
                  <span className="price">
                    +${item.price}/{billingFrequency}
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="result">
          <span className="title">Total(per {billing})</span>
          <span className="price">
            +${totalPrice}/{billingFrequency}
          </span>
        </div>
        <div className="controls">
          <Button
            onClick={() => setCurrentStep((currentValue) => currentValue - 1)}
            type="secondary"
          >
            Go Back
          </Button>
          <Button onClick={() => setIsConfirmed(true)} type="tertiary">
            Confirm
          </Button>
        </div>
      </Panel>
    </SectionHeaderWrapper>
  );
};

const Panel = styled.div`
  .plan {
    display: grid;
    grid-template: repeat(2, 1fr) / 3fr 1fr;
    align-items: center;
    row-gap: 7px;

    .price {
      font-weight: 700;
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      color: var(--color-marine-blue);
      justify-self: end;
    }

    .title {
      font-weight: 500;
      color: var(--color-marine-blue);
    }

    .link {
      font-size: 1.4rem;
      text-decoration: underline;
      color: var(--color-cool-gray);
      justify-self: start;
    }

    .freq {
      text-transform: capitalize;
    }
  }

  .checklist {
    padding: 16px 24px 24px;
    background-color: var(--color-alabaster);
  }

  .line {
    height: 1px;
    background-color: var(--color-cool-gray);
    opacity: 0.2;
    margin: 24px 0 16px 0;
  }

  .ons {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      :not(:last-child) {
        margin-bottom: 16px;
      }

      .title {
        font-weight: 400;
        font-size: 1.4rem;
        color: var(--color-cool-gray);
      }

      .price {
        font-size: 1.4rem;
        color: var(--color-marine-blue);
      }
    }
  }

  .result {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    .title {
      font-size: 1.4rem;
      color: var(--color-cool-gray);
    }

    .price {
      color: var(--color-purplish-blue);
      font-size: 2rem;
    }
  }

  .controls {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 100%;
    grid-column: 2 / 3;

    display: flex;
    justify-content: space-between;
  }
`;

export default React.memo(Summary);
