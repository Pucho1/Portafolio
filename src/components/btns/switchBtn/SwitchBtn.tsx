import { motion } from "framer-motion";
import { useState } from "react";

import "./SwitchBtn.css";

const SwitchBtn = ({ toggleAction }: { toggleAction: (newState: string) => void }) => {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () =>{ 
		setIsOn(!isOn)
		//call the funtion passed by props in this case is one that change the lenguage
		toggleAction(isOn ? "es" : "en");
	};

	return (
		 <button
			className="toggle-container"
			style={{
				justifyContent: "flex-" + (isOn ? "start" : "end"),
			}}
			onClick={toggleSwitch}
		>
			<motion.div
				className="toggle-handle"
				layout
				transition={{
					type: "spring",
					visualDuration: 0.2,
					bounce: 0.2,
				}}
			/>
		</button>
	);
};

export default SwitchBtn;
