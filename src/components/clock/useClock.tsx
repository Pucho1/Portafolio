import { useState, useEffect } from 'react'

const useClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
	const interval = setInterval(() => {
		setTime(new Date());
	}, 1000)

	return () => clearInterval(interval);

	}, []);

	
	const cofigureTime = () => {
		return time.toLocaleTimeString('en-US', {timeZone: 'Europe/Madrid'});
	};

  return {
		time: cofigureTime(),
  };
};

export default useClock;
