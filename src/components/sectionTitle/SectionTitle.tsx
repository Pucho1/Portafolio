import type { SectionTitleProps } from "../../interfaces/sectionTitle";

const SectionTitle = ({ title, customClass, line_w='w-40' }: SectionTitleProps ) => {
  return (
	<div className={`text-left ${customClass}`}>
	  <>
		<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
		  {title}
		</h2>
		<div className={`${line_w} h-1 bg-gray-400 mb-6 rounded-full`}></div>
	  </>
	</div>
  );
};

export default SectionTitle;
