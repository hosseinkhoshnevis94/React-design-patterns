import { useState } from 'react';

function Counter({
  label,
  iconIncrease='increase',
  iconDecrease='decrease',
  hideLabel=false,
  hideIncrease=false,
  hideDecrease=false,
}) {
  const [count, setCount] = useState(0);

  return (
    <>
      {hideLabel && <div>{label}</div>}
      <div>{count}</div>
      {!hideIncrease && (
        <button onClick={() => setCount((p) => p + 1)}>{iconIncrease}</button>
      )}
      {!hideDecrease && (
        <button onClick={() => setCount((p) => p - 1)}>{iconDecrease}</button>
      )}{' '}
    </>
  );
}

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={true}
        hideIncrease={false}
        hideDecrease={false}
      />
    </div>
  );
}
