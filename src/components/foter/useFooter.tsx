import { useNavigate } from "react-router";

const useFooter = () => {
	const navigate = useNavigate();
	const phoneNumber = '+34672595322';
	const gMail = 'martinezochandarenam@gmail.com';


  const handlerOnClik   = () => navigate('/contact');
	
	const handleOnClikWsp = (): void => {
		const message = 'Hello, I would like to get in touch with you.';
		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

		window.open(url, '_blank');
	};

	const handleOnClikGmail = (): void => {
		const message = 'Hello, I would like to get in touch with you.';
		const subject = 'Work Inquiry';
		const url = `https://mail.google.com/mail/?view=cm&to=${gMail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

		window.open(url, '_blank');
	};

  return {
		handlerOnClik,
		handleOnClikWsp,
		phoneNumber,
		handleOnClikGmail,
		gMail,
  };
}

export default useFooter;
