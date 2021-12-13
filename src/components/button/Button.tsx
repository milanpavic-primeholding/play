/* eslint:disable */
import React, { useState, useImperativeHandle, forwardRef } from 'react';

export type CountdownHandle = {
  alterToggle: () => void;
};

const Button = (props: any, ref: any) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    }
  }));

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Button from child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
};

export default forwardRef<CountdownHandle>(Button);
