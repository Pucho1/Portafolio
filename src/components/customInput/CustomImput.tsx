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
	showBorder = false,
} : CustomImportINterface) => {

	const inputValue = '';

  return (
		<div className={`flex flex-col ${type === 'textarea' ? 'h-100' : 'h-40'}`}>
			<hr className="opacity-20"/>
			<div className={`flex flex-row h-[100%] ${ showBorder  ? 'border-b-[1px]' : ''} border-b-(--white_midle) `}>
				<div className="flex items-center p-4 text-sm text-(--white-footer) font-bold">
					0{ fieldNumber }
				</div>

				<div className={`flex flex-col pl-5 w-full pr-5 pb-7`}>

					<label className={`text-2xl  font-medium flex pt-6  transition-all duration-800
						${(inputValue !== null  && inputValue !== '' )? 'text-(--white-footer)' : 'text-white' }`}
						htmlFor={ name }
					>
						{customLabel}
					</label>

					<Controller
						name= { name }
						control={ control }
						render={({ field }) =>
							type === 'text' || type === 'email' ?
									<input
										id={ name }
										type={type}
										placeholder={ placeHolder }
										className={`text-2xl w-full pt-3 bg-transparent placeholder:text-2xl outline-none border-0 ring-0 placeholder:text-(--white-footer)` }
										style={{ border: 'none', outline: 'none' }}
										{...field}
									/> 
								:
									<textarea
										id={ name }
										placeholder={ placeHolder }
										className={`text-2xl w-full pt-3 resize-none bg-transparent h-full appearance-none placeholder:text-2xl outline-none border-0 ring-0 placeholder:text-(--white-footer)` }
										style={{ border: 'none', outline: 'none' }}
										{...field}
									/>
						}
					/>

					{error && <p className="text-sm text-red-500 pt-3"> {error.message}</p>}
				</div>
			</div>
		</div>
  );
};

export default CustomImput;
