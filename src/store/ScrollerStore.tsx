import { useState } from "react";

const ScrollerContext = () => {
	const [scrollTop, setScrollTop] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
    
	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		setScrollTop(event.currentTarget.scrollTop);
		setScrollLeft(event.currentTarget.scrollLeft);
	};
    
	return {
		scrollTop,
		scrollLeft,
		handleScroll,
	};
};

export default ScrollerContext;
