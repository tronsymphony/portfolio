import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);
// @ts-ignore
export default function Scene({ setBg }) {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered
      ? "none"
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
        )}'), auto`;
  }, [hovered]);

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    // @ts-ignore
    light.current.position.x = state.mouse.x * 20;
    // @ts-ignore
    light.current.position.y = state.mouse.y * 20;
    if (sphere.current) {
      // @ts-ignore
      sphere.current.position.x = THREE.MathUtils.lerp(
        // @ts-ignore
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );
      // @ts-ignore
      sphere.current.position.y = THREE.MathUtils.lerp(
        // @ts-ignore
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  // @ts-ignore
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 0.22 : hovered ? 0.6 : 0.5,
      coat: mode && !hovered ? 0.04 : 0.6,
      ambient: mode && !hovered ? 0.5 : 0.5,
      env: mode && !hovered ? 0.4 : 0.5,
      color: hovered ? "#0e1d2d" : mode ? "#1c1b53" : "#1c1b53",
      config: (n) =>
        n === "wobble" && hovered && { mass: 4, tension: 500, friction: 20 },
    },
    [mode, hovered, down]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 2]} fov={75}>
        {/* @ts-ignore  */}
        <a.ambientLight intensity={ambient} />
        {/* @ts-ignore  */}
        <a.pointLight
          // @ts-ignore
          ref={light}
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>

      {/* <Suspense fallback={null}>
        <a.mesh
          // @ts-ignore
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            setMode(!mode);
            setBg({
              background: !mode ? "linear-gradient(45deg, #000, #521b81)" : "linear-gradient(45deg, #000, #222255)",
              fill: !mode ? "#12071f" : "#521b81",
            });
          }}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            speed={0.5}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </a.mesh>
        <Environment preset="city" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        /> */}
      {/* </Suspense> */}
    </>
  );
}
