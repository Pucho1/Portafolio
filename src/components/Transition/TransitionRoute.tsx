import { useContext, useRef, type ReactElement } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import TransitionContext from '../../context/TransitionContext';

/**
 * @function TransitionComponent
 * @description Un componente de envoltura que proporciona transiciones de página
 * utilizando `react-transition-group` y animaciones `GSAP`.
 * @param {TransitionComponentProps} { children } - Las propiedades del componente.
 * @returns {JSX.Element} El componente con transiciones.
 */
const TransitionComponent = ( { children } : {children: ReactElement}) => {

  // Obtengo la ubicación actual de la ruta para usarla como clave de transición
  const location = useLocation();

  // Accedo a la función toggleCompleted del contexto de transición
  // Me aseguro de que TransitionContext esté correctamente tipado para que toggleCompleted sea reconocido.
  const { toggleCompleted } = useContext(TransitionContext);

  const nodeRef = useRef(null);

  return (
    <SwitchTransition>
      <Transition
        // La clave de la transición cambia con la ruta para activar la animación
        key={location.pathname}
        // Duración total de la transición (tanto para entrar como para salir)
        timeout={500}
        nodeRef={nodeRef}
        /**
         * @function onEnter
         * @description Se ejecuta cuando el componente entra en la vista.
         * @param node - El nodo DOM del componente que está entrando.
         */
        onEnter={(node: HTMLElement) => {
          // Indica que la transición no ha completado
          toggleCompleted(false);
          console.log('TransitionComponent onEnter ----->', node);
          // Establece el estado inicial del nodo para la animación de entrada
          gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
          // Crea una línea de tiempo GSAP para la animación de entrada
          gsap
            .timeline({
              paused: true, // Pausa la línea de tiempo hasta que se reproduzca explícitamente
              onComplete: () => toggleCompleted(true), // Marca la transición como completada al finalizar
            })
            // Anima la opacidad y la posición X del nodo
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            // Anima la escala del nodo
            .to(node, { scale: 1, duration: 0.25 })
            .play(); // Inicia la animación
        }}
        /**
         * @function onExit
         * @description Se ejecuta cuando el componente sale de la vista.
         * @param node - El nodo DOM del componente que está saliendo.
         */
        onExit={(node: HTMLElement) => {
          // Crea una línea de tiempo GSAP para la animación de salida
          gsap
            .timeline({ paused: true }) // Pausa la línea de tiempo
            // Anima la escala del nodo
            .to(node, { scale: 0.8, duration: 0.2 })
            // Anima la posición X y la opacidad del nodo
            .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
            .play(); // Inicia la animación
        }}
      >
        <div ref={nodeRef}>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
