import React from 'react';
import styled from 'styled-components';
import SectionHeaderWrapper from './SectionHeaderWrapper';
import PlanCard from './PlanCard';
import PlanToggle from './PlanToggle';
import { AppContext } from '../App';
import { cards } from '../utils/constants';
import useFocusOnMount from '../hooks/useFocusOnMount';

const title = 'Select your plan';
const description = 'You have the option of monthly or yearly billing.';

const Plan = () => {
  const { currentPlan } = React.useContext(AppContext);
  const firstCardRef = useFocusOnMount();

  return (
    <SectionHeaderWrapper title={title} description={description}>
      <Panel>
        <div className="cards">
          {cards.map((card) => {
            return (
              <PlanCard
                key={card.id}
                isActive={currentPlan.id === card.id}
                ref={card.id === 1 ? firstCardRef : null}
                {...card}
              />
            );
          })}
        </div>
        <PlanToggle />
      </Panel>
    </SectionHeaderWrapper>
  );
};

const Panel = styled.div`
  .cards {
    display: flex;
    gap: 18px;
    margin-bottom: 32px;
  }
`;

export default React.memo(Plan);
