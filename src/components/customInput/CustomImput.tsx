import { Controller } from "react-hook-form";

import type { CustomImportINterface } from "../../interfaces/customImputInterface";

const CustomImput = ({ 
	name, 
	fieldNumber = 0, 
	customLabel, 
	control, 
	type= 'text', 
	placeHolder,
	error,
} : CustomImportINterface) => {

	const inputValue = '';

  return (
		<div className="flex flex-col h-40">
			<hr className="opacity-20"/>
			<div className="flex flex-row h-[100%]">
				<div className="flex items-center  p-4 text-xl">
					0{ fieldNumber }
				</div>

				<div className={`flex flex-col pl-5 `}>

					<label className={`text-2xl  font-medium flex pt-6  transition-all duration-800
						${(inputValue !== null  && inputValue !== '' )? 'text-(--white-footer)' : 'text-white' }`}
					>
						{customLabel}
					</label>

					<Controller
						name= { name }
						control={ control }
						render={({ field }) =>
								<input 
									id={ name } 
									type={type} 
									placeholder={ placeHolder } 
									className={`text-2xl w-full pt-3 bg-transparent placeholder:text-2xl outline-none border-0 ring-0 placeholder:text-(--white-footer)` }
									style={{ border: 'none', outline: 'none' }}
									{...field} 
								/>
						}
					/>

					{error && <p className="text-xl text-red-500 pt-3"> {error.message}</p>}

				</div>
			</div>
		</div>
  );
};

export default CustomImput;
