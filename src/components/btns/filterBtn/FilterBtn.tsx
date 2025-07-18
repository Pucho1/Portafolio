import MagneticBtn from '../magneticBtn/MagneticBtn';

const FilterBtn = ( { clickAction, value, activeValue } : { clickAction: (value: string) => void, value: string, activeValue: string }) => {

	const handlerOnClick = (value: string) => {
		clickAction(value);
	};

  return (
    <MagneticBtn>
			<button
				onClick={() => handlerOnClick(value)}
				className={`animated-btn px-4 py-2 rounded-full text-sm font-medium h-12 min-w-18 md:hover:text-white ${
					activeValue === value 
						? 'bg-black text-white'
						: 'bg-transparent text-black border-1 border-gray-300'
				}`}
			>
				<span className='flex justify-center items-center'>{
					value.charAt(0).toUpperCase() + value.slice(1)}
				</span>
			</button>
		</MagneticBtn>
  );
};

export default FilterBtn;
