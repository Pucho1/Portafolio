import type { ReactElement } from "react";

import useMovement from "./useMovement";

const MoveElementByScrollInX = ({children}: {children: ReactElement}) => {


	const { handleRowMovement } = useMovement();

  return (
    <div className="w-full" style={{ transform: `translateX(${handleRowMovement()}px)` }}>
			{children}
		</div>
  );
};

export default MoveElementByScrollInX;
