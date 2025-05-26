
// import { useRef , useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importa ScrollTrigger para detectar la visibilidad

// // Registra el plugin ScrollTrigger. Esto es crucial si lo vas a usar.
// gsap.registerPlugin(ScrollTrigger);

// function Description() { // Reemplaza 'YourComponent' con el nombre de tu componente
//     const textRef = useRef<HTMLHeadingElement>(null);
//     const textContent = "Creo espacios donde tus ideas se vuelven leyenda. Cada proyecto es más que diseño o código: es el nacimiento de algo que trasciende. Traduzco tu visión en experiencias digitales memorables, vivas, únicas. Porque en el mundo digital, existir no basta... hay que dejar huella.";

//     // Divide el texto en palabras, incluyendo espacios para mantener el formato original
//     const words = textContent.split(/(\s+)/).filter(word => word.length > 0);

// useEffect(() => {
//                 console.log("useEffect: Iniciando configuración de animación.");

//                 // Verifica si el elemento h4 ya está montado en el DOM.
//                 if (!textRef.current) {
//                     console.warn("useEffect: textRef.current es null. El elemento h4 no está listo.");
//                     return; // Sale si el elemento no está disponible.
//                 }

//                 const wordSpans = textRef.current.querySelectorAll('span');
//                 if (wordSpans.length === 0) {
//                     console.warn("useEffect: No se encontraron spans dentro del h4. Revisa el JSX.");
//                     return; // Sale si no hay palabras para animar.
//                 }
//                 console.log(`useEffect: Se encontraron ${wordSpans.length} spans para animar.`);

//                 // Crea una línea de tiempo GSAP, inicialmente pausada.
//                 const timeLine = gsap.timeline({
//                     paused: true,
//                     // Opcional: Añade un onUpdate para depurar el progreso de la animación
//                     // onUpdate: () => {
//                     //     if (wordSpans[0]) {
//                     //         console.log(`Opacidad del primer span: ${gsap.getProperty(wordSpans[0], "opacity")}`);
//                     //     }
//                     // }
//                 });

//                 // Define la animación FROM: desde y: '100%' y opacity: 0,
//                 // hasta el estado natural del elemento (y: '0%', opacity: 1).
//                 // GSAP se encarga de establecer el estado inicial por ti para las animaciones 'from'.
//                 timeLine.from(wordSpans, {
//                     y: '100%', // Empieza desde abajo
//                     opacity: 0, // Empieza completamente invisible
//                     stagger: 0.05, // Retraso secuencial entre cada palabra para el efecto de "ola".
//                     duration: 0.6, // Duración de la animación individual de cada palabra.
//                     ease: "power3.out", // Curva de aceleración para una animación más suave.
//                     // onStart: () => console.log("timeLine.from: Animación iniciada para los spans."),
//                     // onComplete: () => console.log("timeLine.from: Animación completada para los spans."),
//                 });

//                 // Crea el ScrollTrigger para activar la animación cuando el elemento entre al viewport.
//                 const st = ScrollTrigger.create({
//                     trigger: textRef.current, // El elemento que activará el trigger.
//                     start: "bottom 100%", // El trigger se activa cuando el fondo del elemento
//                                           // toca el fondo del viewport. Esto asegura que el usuario
//                                           // debe scrollear para que la animación se dispare.
//                     markers: true, // Deja esto para depuración, pero quítalo en producción.
//                     onEnter: () => {
//                         console.log("ScrollTrigger: Elemento ENTRÓ al viewport. Reproduciendo timeLine.");
//                         timeLine.play(); // Reproduce la línea de tiempo cuando el elemento entra.
//                     },
//                     // onLeaveBack: () => timeLine.reverse(), // Opcional: Descomenta si quieres que la animación se invierta
//                                                             // cuando el usuario scrollea hacia arriba y el elemento sale del viewport.
//                     once: true, // ¡Importante! La animación se disparará solo una vez.
//                 });

//                 console.log("useEffect: Configuración de ScrollTrigger completada.");

//                 // Función de limpieza para cuando el componente se desmonte o el useEffect se re-ejecute.
//                 // Esto es CRUCIAL para evitar fugas de memoria y comportamientos erráticos de ScrollTrigger.
//                 return () => {
//                     console.log("useEffect Cleanup: Limpiando ScrollTrigger.");
//                     if (st) {
//                         st.kill(); // "Mata" el ScrollTrigger para liberar recursos.
//                     }
//                     // Opcional: Si la línea de tiempo debe ser completamente desechada.
//                     // timeLine.kill();
//                 };
//             }, []); // Array de dependencias vacío: el efecto se ejecuta solo una vez al montar.

//     return (
//         <section className="flex justify-center h-[50vh] my-5 items-center">
//             <div className="flex flex-col md:flex-row px-4 md:px-20 gap-8">
                
// 				<div className="grow-[2] items-center lg:pr-30">
//                     <h4 ref={textRef} className="text-xl">

// 						{/* {textContent} */}
//                         {words.map((word, index) => (
//                             // Inicialmente, los spans no necesitan clases de animación CSS,
//                             // ya que GSAP controlará la opacidad y la posición.
//                             // inline-block es importante para que y-translate funcione correctamente.
//                             <span key={index} className="inline-block">
//                                 {word}
//                             </span>
//                         ))}
//                     </h4>
//                 </div>

//                 <div className="pr-0 md:pl-15 md:pr-0 items-center">
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                         Fugiat eos optio quo et necessitatibus asperiores ipsum repellat obcaecati dolor,
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Description;



const Description = () => {

  return (
    <section className="flex justify-center h-[50vh] my-5 items-center">
			<div className="flex flex-col md:flex-row px-20 lg:px-30 gap-8">
				<div className="grow-[2] items-center lg:pr-30">
					<h4 className="text-2xl">
						Creo espacios donde tus ideas se vuelven leyenda.
						Cada proyecto es más que diseño o código: es el nacimiento de algo que trasciende.
						Traduzco tu visión en experiencias digitales memorables, vivas, únicas.
						Porque en el mundo digital, existir no basta... hay que dejar huella.
					</h4>
				</div>

				<div className="grow-[1] pr-15 md:pl-15 md:pr-0 items-center">
					<p>
						Desde la primera línea hasta el último píxel, cada decisión cuenta. 
                        No solo creo para ser visto, sino para ser sentido, recordado, compartido. 
                        Tu historia merece ser contada con fuerza, claridad y alma. Y eso, es lo que construyo.
					</p>
				</div>
			</div>
		</section>
  );
};

export default Description;
