import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../server/store/reducers/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment());
  };
  return (
    <p>
      Hello world...  from react
      {count}
      <button type="button" onClick={onIncrement}>+</button>
    </p>
  );
}

export default App;
