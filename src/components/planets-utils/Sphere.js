import { useTexture } from '@react-three/drei';
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from "@react-three/fiber";

const UseDynamicTexture = ({imageUrl}) => {
  const [imageDataUrl, setImageDataUrl] = useState(null);
  console.log(imageUrl, "from outside inside");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        console.log(imageUrl, "from iinside inside");
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = (e) => {
          const dataUrl = e.target?.result;
          setImageDataUrl(dataUrl);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Failed to fetch image:', error);
      }
    };

    fetchImage();
  }, [imageUrl]);

  const terrainTexture = useTexture(imageUrl === "eearth ? '/earthmap.jpg'");
  //const terrainTexture = useLoader(THREE.TextureLoader, imageDataUrl);
  //const terrainTexture = new THREE.TextureLoader().load(imageDataUrl);

  return (
    <mesh >
      {/* Define your mesh geometry and other properties */}
      {/* Make sure to assign a material with map property */}
        <sphereGeometry args={[3, 50, 50]} />
        <meshStandardMaterial map={terrainTexture} />
    </mesh>
  );
};

export default UseDynamicTexture;