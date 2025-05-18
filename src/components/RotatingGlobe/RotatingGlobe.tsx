// Globe.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three';

function RotatingGlobe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const texture = useTexture('public/imgs/mapaMundi.png') // Usa la ruta correcta

  /**
   * @description Función que se ejecuta en cada frame para rotar el globo terráqueo
   * @returns {void}
   */
  useFrame(() => {
     if (globeRef.current) {
      globeRef.current.rotation.y += 0.003; // velocidad de rotación
    }
  })

  return (
    <mesh ref={globeRef}> // Referencia al mesh para poder rotar
      <sphereGeometry args={[2, 44, 44]} /> // Aumenta la cantidad de segmentos para mayor detalle, puedo ajustar el radio según lo necesite
      <meshStandardMaterial map={texture} /> // Aplico la textura del mapa mundi
    </mesh>
  )
};

/**
 * 
 * @returns {JSX.Element}
 * @description Componente que renderiza la escena 3D con el globo terráqueo
 */
export default function GlobeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingGlobe />
      <OrbitControls  enableZoom={false} /> // Desactiva el zoom, puedes ajustar la configuración según tus necesidades
    </Canvas>
  )
};
