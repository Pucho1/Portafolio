import { useNavigate } from "react-router";

const useFooter = () => {
	const navigate = useNavigate();

  const handlerOnClik = () => navigate('/contact');

	const footerLinks = [
		{
			name: "Instagram",
			url: "https://www.instagram.com/yourprofile",
			icon: "ri-instagram-line",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/yourprofile",
			icon: "ri-linkedin-line",
		},
		{
			name: "GitHub",
			url: "",
			icon: "ri-github-line",
		},
	]

  return {
		footerLinks,
		handlerOnClik,
  };
}

export default useFooter