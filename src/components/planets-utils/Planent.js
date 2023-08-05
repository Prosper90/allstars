import React, { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { useTexture, PerspectiveCamera, OrbitControls, Ring, RenderTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import UseDynamicTexture from './Sphere';



export default function Planets({ distance, speed, index, texture, moreInfo, data }) {



  //const terrainTexture = useTexture(texture);
  const [isHovered, setIsHovered] = useState(false);
  const circleMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
    wireframe: true,
  });

  const planetRef = useRef();
  const initialAngle = useMemo(() => Math.random() * Math.PI * 2, []);


  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  // Use useMemo to create the position of the planet based on its distance from the sun
  const initialPosition = useMemo(() => {
    const angle = initialAngle + index * speed;
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    return [x, 0, z];
  }, [distance, initialAngle, index, speed]);


  //console.log(position, index, "positioning");


  // Use useFrame to update the rotation of the planet based on its speed
  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const adjustedTime = elapsedTime - index * 2;
      const direction = index % 2 === 0 ? 1 : -1;
      const angle = initialAngle + adjustedTime * speed * direction;
      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;
      planetRef.current.position.set(x, 0, z);
    }
  });



  useEffect(() => {

  }, [data])
  

  return (
    <mesh
        ref={planetRef}
        scale={2}
        position={initialPosition}
        onPointerOver={handleHover}
        onPointerOut={handleUnhover}
        onClick={() => moreInfo(data, texture)}
        className="cursor-pointer"
    >
      <mesh>
        <sphereGeometry args={[3, 50, 50]} />
        {/*<meshStandardMaterial map={terrainTexture} />*/}
        <lineBasicMaterial color={0xffffff} transparent opacity={0.1} linewidth={4} />
      </mesh>
       {/* <UseDynamicTexture imageUrl={data.planet_url} /> */}

      {/* HTML content ≈ */}
      { !isHovered  &&
              <Html scale={100} transparent opacity={0.8} rotation={[Math.PI / 2, 0, 0]} className='pointer-events-none'
              >       
                <div className="w-[20px] md:w-[30px] bg-transparent cursor-pointer pointer-events-none h-auto flex justify-center items-center rounded-[100px]">
                  <img src={data.img_url} alt={data.tokenName} className='object-contain mx-auto max-h-full max-w-full rounded-[100px] ' /> 
                </div>
                
            </Html>
      }
      {/* opacity-50 md:opacity-100 */}

    </mesh>


  )
}