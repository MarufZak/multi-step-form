import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import useFocusOnMount from '../hooks/useFocusOnMount';
import { infoFields } from '../utils/constants';
import InputWithLabel from './InputWithLabel';
import SectionHeaderWrapper from './SectionHeaderWrapper';

const title = 'Personal info';
const description = 'Please provide your name, email address, and phone number.';

const Info = () => {
  const { info, setInfo } = React.useContext(AppContext);
  const firstInputRef = useFocusOnMount();

  const handleInfoChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  return (
    <SectionHeaderWrapper title={title} description={description}>
      <Form>
        {infoFields.map((item) => {
          return (
            <InputWithLabel
              key={item.id}
              value={info[item.name]}
              onChange={handleInfoChange}
              ref={item.id === 1 ? firstInputRef : null}
              type={item.type}
              {...item}
            />
          );
        })}
      </Form>
    </SectionHeaderWrapper>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default React.memo(Info);
