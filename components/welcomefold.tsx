import styles from "../styles/Home.module.scss";
import { useState, useRef } from "react";
import device from "../asset/device-mbp-15-nonotch.png";
import muse from "../asset/muse.webp";
import organicolivia from "../asset/organicolivia.webp";
import godaddy from "../asset/godaddy.webp";
import home from "../asset/home.svg";
import arrow from "../asset/arrow.svg";
import { useSpring } from "@react-spring/core";
import * as THREE from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import {
  Sky,
  Environment,
  Effects as EffectComposer,
  useTexture,
  OrbitControls,
  PerspectiveCamera,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { SSAOPass } from "three-stdlib";
import { buffer, random } from "maath";
import Scene from "../components/scene";
import { a } from "@react-spring/web";

extend({ SSAOPass });

//@ts-ignore
function Stars(props) {
  const ref = useRef();
  //@ts-ignore
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2 })
  );
  useFrame((state, delta) => {
    //@ts-ignore
    ref.current.rotation.x -= delta / 50;
    //@ts-ignore
    ref.current.rotation.y -= delta / 10;
  });
  return (
    //@ts-ignore
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#05FFA1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function WelcomeFold() {
  const [{ background }, set] = useSpring(
    { background: "linear-gradient(45deg, #000, #222255)", fill: "#12071f" },
    []
  );
  return (
    <>
    
{/* @ts-ignore   */}
<a.section className={styles.welcome} style={{ background }}>
          <div className={styles.video__fullscreen}>
            <Canvas className="canvas" dpr={[1, 2]}>
              <Scene setBg={set} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Stars />
            </Canvas>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <span className={styles.subtitle}>Hello, my name is</span>
              <h1 className={styles.h1}>
                Nitya
                <div>Hoyos</div>
              </h1>
              <p className={styles.context}>
                I am a developer with nearly a decade of experience working at agencies, I have
                mastered the art of developing elegant, high-performing, and
                powerful web applications, ecommerce stores, and various other
                projects.
              </p>
              {/* <p className={styles.context}>
                I offer cost-effective services that deliver the same quality as
                large agencies, without the bottlenecks and limitations that can
                hinder the progress of your project. I bring a streamlined
                approach to ensure an elegant and efficient realization of your
                goals.
              </p> */}
            </div>
            <div className={styles.btn_content}>
              {/* <a href="#" className={"main_btn"}>About</a>
              <a href="#" className={"main_btn"}>Pricing</a>
              <a href="#" className={"main_btn"}>Not sure how I can help?</a>
              <span className={"main_btn"}>
                Maybe ChatGPT can help You
              </span> */}
            </div>
          </div>
          {/* <img className={styles.bg} src={`${home.src}`} alt="" /> */}
          <img className={styles.arrow} src={`${arrow.src}`} alt="" />
        </a.section>

        <section className={styles.followme}>
          <div className={styles.phone}>
            <a href="tel:424-269-4720">+1 (424) 269-4720</a>
          </div>
          <div className={styles.socbox}>
            <div className={styles.followlabel}>Follow Me</div>
            <div className={styles.soc}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nityananda-h-b5a65080/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/tronsymphony"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/la_rider21/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="mailto:nityahoyos@gmail.com?subject=forwarddesign from our Website"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
