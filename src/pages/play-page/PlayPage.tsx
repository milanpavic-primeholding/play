import React, { useRef } from 'react';
import Button, { CountdownHandle } from '../../components/button/Button';

const PlayPage = () => {
  const buttonRef = useRef<CountdownHandle>(null);
  return (
    <div>
      <button
        onClick={() => {
          if (buttonRef) {
            buttonRef?.current?.alterToggle();
          }
        }}>
        Button from parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default PlayPage;
