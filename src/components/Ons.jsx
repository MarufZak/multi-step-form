import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import useFocusOnMount from '../hooks/useFocusOnMount';
import { availableOns } from '../utils/constants';
import OnsCard from './OnsCard';
import SectionHeaderWrapper from './SectionHeaderWrapper';

const title = 'Pick add-ons';
const description = 'Add-ons help enhance your gaming experience.';

const Ons = () => {
  const { ons } = React.useContext(AppContext);
  const firstInputRef = useFocusOnMount();

  return (
    <SectionHeaderWrapper title={title} description={description}>
      <Panel>
        {availableOns.map((item) => {
          const isActive = ons.find((onsItem) => onsItem.id === item.id);
          return (
            <OnsCard
              key={item.id}
              ref={item.id === 1 ? firstInputRef : null}
              isActive={isActive}
              {...item}
            />
          );
        })}
      </Panel>
    </SectionHeaderWrapper>
  );
};

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default React.memo(Ons);
