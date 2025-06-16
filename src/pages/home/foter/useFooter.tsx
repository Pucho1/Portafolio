
const useFooter = () => {

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
  };
}

export default useFooter