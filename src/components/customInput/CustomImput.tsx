import { useState } from "react";
import type { CustomImportINterface } from "../../interfaces/customImputInterface";

const CustomImput = ({ fieldNumber = 0, customLabel, type= 'text', placeHolder } : CustomImportINterface) => {

  const [inputValue, setInputValue] = useState<string  | null>(null);


	  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any): void => {
    const nuevoValor = e.target.value;
    setInputValue(nuevoValor === '' ? null : nuevoValor);
  };

  return (
		<div className="flex flex-col h-35">
			<hr className="opacity-20"/>
			<div className="flex flex-row h-[100%]">
				<div className="flex items-center  p-4 text-xl">
					0{ fieldNumber }
				</div>

				<div className="flex flex-col pl-5">
					<label className={`text-2xl  font-medium flex pt-6  transition-all duration-800
						${(inputValue !== null  && inputValue !== '' )? 'text-(--white-footer)' : 'text-white' }`}
					>
						{customLabel}
					</label>
					<input
						type={type}
						placeholder={placeHolder}
						className={`text-2xl w-full bg-transparent pt-3 placeholder:text-2xl outline-none border-0 ring-0 placeholder:text-(--white-footer)` }
						style={{ border: 'none', outline: 'none' }}
						onChange={ handleOnChange }
					/>
				</div>
			</div>
		</div>
  );
};

export default CustomImput;
