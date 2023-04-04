import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Plan from './components/Plan';
import Controls from './components/Controls';
import Ons from './components/Ons';
import Summary from './components/Summary';

export const AppContext = React.createContext();

function App() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [currentPlan, setCurrentPlan] = React.useState({});
  const [billingFrequency, setBillingFrequency] = React.useState('mo');
  const [ons, setOns] = React.useState([]);
  const [info, setInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  React.useEffect(() => {
    let newCurrentPlan;
    let newOns;
    if (billingFrequency === 'yr') {
      newCurrentPlan = { ...currentPlan, price: currentPlan.price * 10 };
      newOns = ons.map((item) => ({ ...item, price: item.price * 10 }));
    } else {
      newCurrentPlan = { ...currentPlan, price: currentPlan.price / 10 };
      newOns = ons.map((item) => ({ ...item, price: item.price / 10 }));
    }
    setCurrentPlan(newCurrentPlan);
    setOns(newOns);
  }, [billingFrequency]);

  const value = React.useMemo(() => {
    return {
      currentStep,
      setCurrentStep,
      currentPlan,
      setCurrentPlan,
      billingFrequency,
      setBillingFrequency,
      info,
      setInfo,
      ons,
      setOns,
    };
  });

  return (
    <AppContext.Provider value={value}>
      <Wrapper>
        <Sidebar />
        {currentStep === 1 && <Info />}
        {currentStep === 2 && <Plan />}
        {currentStep === 3 && <Ons />}
        {currentStep === 4 && <Summary />}
        {currentStep !== 4 && <Controls />}
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 940px;
  width: 100%;
  height: 600px;
  background: var(--color-white);
  padding: 16px 100px 16px 16px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 274px 450px;
  column-gap: 100px;

  position: absolute;
  inset: 0;
  margin: auto;
`;

export default App;
