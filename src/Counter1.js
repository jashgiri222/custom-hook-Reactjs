import React from 'react'
import useCounterCustom from './useCounterCustom'

function Counter1() {
    const [count,increment, decrement] = useCounterCustom()
    return (
        <>
           <div>
          Counter1:  {count}
            </div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter1