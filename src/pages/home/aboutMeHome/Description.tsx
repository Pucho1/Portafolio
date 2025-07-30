import { useNavigate } from 'react-router';

import SectionBtn from '../../../components/btns/sectionbtn/SectionBtn';
import './aboutMe.css'

const AboutMe = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/about');

  return (
    <section className="relative flex justify-center h-[70vh] mt-5">
			<div className="flex flex-col md:flex-row gap-8 content-top px-5 md:px-20 lg:px-30 py-[10%] text-black">
				<div className="items-center md:w-[80%] md:pr-[10%]">
					<h4 className="clamp_font font-light">
						Creo espacios donde tus ideas se vuelven leyenda.
						Cada proyecto es más que diseño o código porque en el mundo digital, 
						existir no basta... hay que dejar huella.
					</h4>
				</div>

				<div className="pr-17 md:pr-0 items-center md:w-[20%] mt-3">
					<h1>
						Cada decisión cuenta. 
              			No es solo ser visto, sino ser sentido, recordado, compartido. 
					</h1>
				</div>
			</div>

			<div className="absolute flex left-[50%] sm:left-[60%] bottom-[10%] md:left-[75%]">
				<SectionBtn 
			  		hgt={9} 
					wdt={9} 
					classCustom='md:h-12 md:w-12' 
					content={'About me'}
					onClick={ handleClick }
				/>
            </div>
		</section>
  );
};

export default AboutMe;


// // Desde la primera línea hasta el último píxel, cada decisión cuenta. 
//               			No solo creo para ser visto, sino para ser sentido, recordado, compartido. 
//                 		Tu historia merece ser contada con fuerza, claridad y alma. Y eso, es lo que construyo.