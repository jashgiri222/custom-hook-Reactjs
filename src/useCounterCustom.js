import { useState } from 'react'

function useCounterCustom(initialValue=0) {
    const [count, setCount] = useState(initialValue)

    function increment() {
        setCount(count + 1)

    }
    function decrement() {
        setCount(count - 1)

    }


  return [count,increment,decrement]
  
}

export default useCounterCustom;