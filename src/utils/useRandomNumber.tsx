
const useRandomNumber = () => {
  
	const randomNumber = (): number => {
		return Math.floor(Math.random() * 8) + 5
	};

  return { 
		randomNumber
	};
};

export default useRandomNumber;