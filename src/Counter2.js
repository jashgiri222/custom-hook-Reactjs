import useCounterCustom from './useCounterCustom'

    function Counter2() {
    const [count, increment,decrement] = useCounterCustom(10)
  return (
          <>Counter2 :{count}
           <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
            </>
  )
}

export default Counter2