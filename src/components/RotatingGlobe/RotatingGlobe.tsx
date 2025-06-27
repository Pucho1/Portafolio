import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three';

export function RotatingGlobe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const texture = useTexture('public/imgs/mapaMundi.png')

  /**
   * @description Función que se ejecuta en cada frame para rotar el globo terráqueo
   * @returns {void}
   */
  useFrame(() => {
     if (globeRef.current) {
      globeRef.current.rotation.y += 0.003; // velocidad de rotación
    }
  })

  /**
   * Referencia al mesh para poder rotar
   * Aumenta la cantidad de segmentos para mayor detalle, puedo ajustar el radio según lo necesite
   * Aplico la textura del mapa mundi
   */
  return (
    <mesh ref={globeRef}> 
      <sphereGeometry args={[2, 44, 44]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
};

/**
 * OrbitControls ---> Desactiva el zoom, puedes ajustar la configuración según tus necesidades
 * @returns {JSX.Element}
 * @description Componente que renderiza la escena 3D con el globo terráqueo
 */
const GlobeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingGlobe />
      <OrbitControls  enableZoom={false} />
    </Canvas>
  )
};

export default GlobeScene;
