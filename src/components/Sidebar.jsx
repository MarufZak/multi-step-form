import React from 'react';
import styled from 'styled-components';
import bgDesktop from '../assets/images/bg-sidebar-desktop.svg';
import bgMobile from '../assets/images/bg-sidebar-mobile.svg';
import Step from './Step';
import { steps } from '../utils/constants.js';
import { AppContext } from '../App';

const Sidebar = () => {
  const { currentStep } = React.useContext(AppContext);
  return (
    <Wrapper>
      <picture>
        <source srcSet={bgDesktop} media="(min-width: 420px)" />
        <source srcSet={bgMobile} media="(max-width: 419px)" />
        <img className="bg" src={bgDesktop} alt="background with illustrations" />
      </picture>
      <ul className="steps">
        {steps.map((item) => {
          return (
            <Step key={item.step} {...item} isActive={currentStep === item.step} />
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: relative;
  height: 570px;
  padding: 40px 32px;

  .bg {
    position: absolute;
    inset: 0;
    object-fit: cover;
    pointer-events: none;
  }

  .steps {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export default React.memo(Sidebar);
