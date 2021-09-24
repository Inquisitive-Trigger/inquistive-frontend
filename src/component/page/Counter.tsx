import * as React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: red;
`

type iCounter = {
  count: number
  onDecrement: () => void
  onIncrement: () => void
  onIncrementByAmount: (count: number) => void
  onIncrementIfOdd: (value: number) => void
  onIncrementAsync: (value: number) => void
}

export const Counter: React.FC<iCounter> = ({
  count,
  onDecrement,
  onIncrement,
  onIncrementByAmount,
  onIncrementIfOdd,
  onIncrementAsync
}) => {
  const [incrementAmount, setIncrementAmount] = React.useState('2')
  const incrementValue = Number(incrementAmount) || 0

  return (
    <StyledDiv>
      <div>
        <button
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => onIncrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          onClick={() => onIncrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          onClick={() => onIncrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </StyledDiv>
  );
}
