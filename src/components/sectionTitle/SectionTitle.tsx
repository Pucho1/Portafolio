import type { SectionTitleProps } from "../../interfaces/sectionTitle";

const SectionTitle = ({ title, customClass }: SectionTitleProps ) => {
  return (
	<div className={` text-center ${customClass}`}>
		<h2 className=" text-8xl md:text-9xl font-bold text-gray-300 z-1">
		  {title}
		</h2>
		{/* <div className={`${line_w} h-1 bg-gray-400 mb-6 rounded-full`}></div> */}
	</div>
  );
};

export default SectionTitle;
