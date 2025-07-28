
const useRandomNumber = () => {
  
	const ramdomNumber = (): number => {
		return Math.floor(Math.random() * 8) + 5
	};

  return { 
		ramdomNumber
	};
};

export default useRandomNumber;