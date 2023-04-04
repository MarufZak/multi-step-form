import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = ({ title, description, children }) => {
  return (
    <Wrapper>
      <h1 className="section-title">{title}</h1>
      <p className="section-desc">{description}</p>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 40px 0 16px 0;
  animation: fadeOut 0.3s;

  .section-title {
    color: var(--color-marine-blue);
    font-size: 3.2rem;
    margin-bottom: 10px;
  }

  .section-desc {
    color: var(--color-cool-gray);
    margin-bottom: 35px;
  }

  @keyframes fadeOut {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

export default SectionHeaderWrapper;
