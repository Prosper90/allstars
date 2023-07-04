import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Suspense } from 'react';
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { AmbientLight, Material, MeshBasicMaterial, PlaneGeometry, SphereGeometry } from "three";
//import { useTexture, PerspectiveCamera, OrbitControls, RenderTexture  } from "@react-three/drei";
//import sun from "../../img/logo.jpg";
//import secondSun from "../../img/Secondsun.jpg";
//import thirdSun from "../../img/thirdSun.png";
//import mecury from "../../img/burning.jpg";
//import venus from "../../img/whale.jpg";
//import earth from "../../img/bunnies.jpg";
//import mars from "../../img/horris.jpg";
//import jupiter from "../../img/Anon.jpg";
//import saturn from "../../img/rabbit.jpg";
//import uranus from "../../img/bigA.jpg";
//import neptune from "../../img/roundbanana.jpg";
//import pluto from "../../img/umbrella.jpg";
//import { angleToradians } from "../utils/angles";
import * as THREE from "three";
import { Controls as PointerControls } from "../components/planets-utils/Control";
//import { EffectComposer, SSAO } from '@react-three/postprocessing'
//import { BaseControl, Controls, useControl } from "react-three-gui";
//import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei';
import {Maincanvas} from '../components/planets-utils/maincanvas'
import Planets from '../components/planets-utils/Planent';
import Background from '../components/planets-utils/Background';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ZoomCursorControls from "../components/planets-utils/ZoomCursorControls"
import { useTexture,  RenderTexture  } from "@react-three/drei";
import Modal from '../components/planets-utils/Modal';
import { animated, Globals, useSpring } from "@react-spring/three";



export default function PlanetsPage({setLoading, loading}) {


  //const rotationX = useControl("Rotation X", { type: "number", spring: true });
  //const ssao = useControl("ssao", { type: "boolean" });
  Globals.assign({
	frameLoop: "always",
});
 

 const planetsMap = [
   {
    name: "mecury",
    image: "/mercurymap.jpg"
   },
   {
    name: "venus",
    image: "/venusmap.jpg",
    atmosphere: "/venusAtmosphere.jpeg"
   },
   {
    name: "earth",
    image: "/earthmap.jpg"
   },
   {
    name: "mars",
    image: "/marsmap.jpg"
   },
   {
    name: "jupiter",
    image: "/jupitermap.jpg"
   },
   {
    name: "saturn",
    image: "/saturnmap.jpg",
    rings: "/saturnrings.png"
   },
   {
    name: "uranus",
    image: "/uranusmap.jpg"
   },
   {
    name: "naptune",
    image: "/neptunemap.jpg"
   },
 ]



  const[holdCam, setCam] = useState();
  const[getscene, setGetScene] = useState();
  const [currentDetails, setCurrentDetails] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [TokensDetails, SetTokensDetails] = useState();
  const [textureSelected, setTextureSelected] = useState();


  const controlsRef = useRef();


  const getProjects = async () => {
    setLoading(true);
      const getp = await fetch('https://web3planet.bintfinance.org/projects', {
      method: 'GET',
          headers: {
              'Content-Type':'application/json',
          },
          });
      const valueGotten = await getp.json()

          console.log(valueGotten, "checking");

        SetTokensDetails(valueGotten);
        setLoading(false)
  }


  const moreInfo = async (data, textureto) => {
    console.log(data);
    const updateClick = await fetch('https://web3planet.bintfinance.org/clicks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          id: data._id
        }),
    });
    console.log(updateClick);
    setCurrentDetails(data);
    setOpenModal(true);
    setTextureSelected(textureto);
  }


  useEffect(() => {

  console.log("Use effect calllgit ed")
  getProjects();

  }, [])

  return (
    <div className='h-screen relative overflow-hidden'
    >
      <div className="relative h-screen z-20">
       <Maincanvas 
        TokensDetails={TokensDetails}
        holdCam={holdCam}
        setCam={setCam}
        controlsRef={controlsRef}
        moreInfo={moreInfo}
        setGetScene={setGetScene}
        planetsMap={planetsMap}
        loading={loading}
        setLoading={setLoading}
       />
      </div>
        {/* Render the modal when showModal is true */}
      <div className="relative h-screen p-20 flex justify-center items-center">
        {openModal && <Modal currentDetails={currentDetails} setOpenModal={setOpenModal} textureSelected={textureSelected} />}
      </div>
        

    </div>
  )
}








function Ecliptic({ xRadius = 1, zRadius = 1, orbits }) {
  const points = [];

  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#4e433f" linewidth={10} />
    </line>
  );
}