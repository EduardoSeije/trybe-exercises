import {useState, useEffect} from 'react';

function useTimer() {
const [counter, setCounter] = useState(0);
const [random, setRandom] = useState(null);
const min = 1;
const max = 100;
const onSec = 1000;
const ten = 10;


useEffect(() => {
    const timerInterval = setInterval(() => {
        const newCounter = counter + 1;
        const tenSec = newCounter > 0 && newCounter % ten;
        if (tenSec === 0) {
            setRandom(Math.round(Math.random() * (max - min) + min))
        }
        setCounter(newCounter);
    }, onSec);
    return () => {
        clearInterval(timerInterval);
    };
}, [counter]);

const REMAINDER_THREE = 3;
  const REMAINDER_FIVE = 5;
  const FOUR_SECONDS = 4000;
  const isMultiple = random
    && (random % REMAINDER_THREE === 0 || random % REMAINDER_FIVE === 0);

  useEffect(() => {
    if (isMultiple) {
      setTimeout(() => {
        setRandom(null);
      }, FOUR_SECONDS);
    }
  }, [random, isMultiple]);

  return {
    counter,
    random,
    isMultiple,
  };

}

export default useTimer;
