import { useNavigate } from "react-router";

const useFooter = () => {
	const navigate = useNavigate();

  	const handlerOnClik = () => navigate('/contact');

  return {
		handlerOnClik,
  };
}

export default useFooter