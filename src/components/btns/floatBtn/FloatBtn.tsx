import { Menu } from "lucide-react";
import DawnAnimatedBtn from "../dawnAnimatedBtn/DawnAnimatedBtn";

const FloatBtn = () => {

  return (
    <div>
      <div className="z-50 fixed top-20 right-15 p-3">
				<DawnAnimatedBtn  content = { <Menu size={24} />}/>
			</div>
    </div>
  );
};

export default FloatBtn;