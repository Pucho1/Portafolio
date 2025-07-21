import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactElement } from "react";

const PagesLayout = ({ pageName, children } : { pageName: string, children: ReactElement }) => {

	const [showPageName, setShowPageName] = useState(true);

	useEffect(() => {
		setShowPageName(true);

		const timer = setTimeout(() => {
			setShowPageName(false);
		}, 1000)

		return () => clearTimeout(timer);

	}, [pageName]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
			{
				showPageName ? 
					<AnimatePresence>
						<motion.div
							key="pageName"
							className="flex items-center justify-center text-black h-screen w-screen"
							initial={{opacity: 1, y: 20}}
							exit={{opacity: 0, y: -20, transition:{ duration: 0.3, ease: "easeOut" }}}
						>
							<h1 className="text-5xl font-bold text-black">{ pageName }</h1>
						</motion.div>

					</AnimatePresence>
				:
				<div className="h-full w-screen">
					{ children }
				</div>
					// <AnimatePresence mode="wait" >
					// 	<motion.div
					// 		className="h-full w-screen"
					// 		key="pageContent"
					// 		initial={{ opacity: 0, y: 20 }}
					// 		animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }}
					// 		exit={{ opacity: 0, transition: { duration: 0.5 } }} // Esto es más para transiciones entre layouts si los tuvieras
					// 	>
					// 		{ children }
					// 	</motion.div>
					// </AnimatePresence>
			}
		</div>
  );
};

export default PagesLayout;
