import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/icon-thank-you.svg';

const Confirm = () => {
  return (
    <Wrapper>
      <img src={icon} alt="checked icon" />
      <h2 className="title">Thank you!</h2>
      <p className="desc">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  animation: fadeOut 0.3s;

  .title {
    color: var(--color-marine-blue);
    font-size: 3.2rem;
    margin: 32px 0 14px 0;
  }

  .desc {
    color: var(--color-cool-gray);
    line-height: 1.56;
  }

  @keyframes fadeOut {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

export default Confirm;
