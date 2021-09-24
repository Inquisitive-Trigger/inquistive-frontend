import * as React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../app/slices/counterSlice'
import { Counter } from '../../component/page/Counter'

export const CounterContainer = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return <Counter
    count={count}
    onDecrement={() => dispatch(decrement())}
    onIncrement={() => dispatch(increment())}
    onIncrementByAmount={amount => dispatch(incrementByAmount(amount))}
    onIncrementIfOdd={value => dispatch(incrementIfOdd(value))}
    onIncrementAsync={value => dispatch(incrementAsync(value))}
  />

}
