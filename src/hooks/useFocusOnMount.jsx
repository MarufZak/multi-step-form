import React from 'react';

const useFocusOnMount = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};

export default useFocusOnMount;
