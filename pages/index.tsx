import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "./footer";
import { useState, useRef } from "react";

import device from "../asset/device-mbp-15-nonotch.png";
import muse from "../asset/muse.webp";
import organicolivia from "../asset/organicolivia.webp";
import godaddy from "../asset/godaddy.webp";
import home from "../asset/home.svg";
import arrow from "../asset/arrow.svg";

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
import { useSpring } from "@react-spring/core";
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

export default function Home() {
  const [{ background }, set] = useSpring(
    { background: "linear-gradient(45deg, #000, #222255)", fill: "#12071f" },
    []
  );
  return (
    <>
      <Head>
        <title>
          Nitya Hoyos | Full-Stack, Wordpress, Laravel, ReactJS, NodeJS and
          Shopify Freelance Developer available for hire or contract work.
        </title>
        <meta
          name="description"
          content="Your one-stop for custom software development, web design, and app creation. Let me help you take your business to the next level."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=DM+Sans:wght@400;500;700&family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;300;700&family=Oswald:wght@200;400;500;600;700&family=Roboto+Mono:wght@300;500;700&family=Space+Mono:wght@400;700&family=Syncopate:wght@400;700&family=VT323&family=Yellowtail&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
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
                With nearly a decade of experience working at agencies, I have
                mastered the art of developing elegant, high-performing, and
                powerful web applications, ecommerce stores, and various other
                projects.
              </p>
              <p className={styles.context}>
                I offer cost-effective services that deliver the same quality as
                large agencies, without the bottlenecks and limitations that can
                hinder the progress of your project. I bring a streamlined
                approach to ensure an elegant and efficient realization of your
                goals.
              </p>
            </div>
          </div>
          <img className={styles.bg} src={`${home.src}`} alt="" />
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

        <section className={styles.services}>
          <div className={styles.overlay}></div>
          <div className={styles.container}>
            <header className={styles.heade}>
              <h2 className={styles.h2}>
                The Team, Tools and Talent to Help You Succeed.
              </h2>
              <p>
                You deeply care about your customers and strive to provide them
                with the best service possible. Your passion is evident in every
                conversation you have, and it&lsquo;s the reason why people choose to
                do business with you.
              </p>
              <p>
                To simplify, amplify, and bring that energy to the forefront,
                you deserve a genuine partner. I have helped hundreds of
                businesses like yours achieve their goals, drive their companies
                forward, and create incredibly satisfied customers.
              </p>
              

              <div className={styles.btn}>
              <a href="mailto:nityahoyos@gmail.com" className={"btn_link btn_link--light"}>
                  Start Engaging Your Customers Today
                  <span className={styles.chevron}>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a href="mailto:nityahoyos@gmail.com" className={"btn_link btn_link--light"}>
                  Free Website Review
                  <span className={styles.chevron}>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
                 
              </div>
            </header>
            <div className={styles.content}>
              <div className={styles.item}>
                <div className={styles.img}>
                <svg viewBox="0 0 163.5 149.87"><path d="M61.31,37.47h6.81V27.25h88.56V88.56H105.59v6.81H163.5V0H61.31ZM68.12,6.81h88.56V20.44H68.12Z"></path><path d="M102.19,40.87H0V126H102.19Zm-6.82,78.35H6.81V68.12H95.37Zm0-57.91H6.81V47.69H95.37Z"></path><polygon points="132.84 143.06 44.28 143.06 44.28 129.43 37.47 129.43 37.47 149.87 139.65 149.87 139.65 98.78 132.84 98.78 132.84 143.06"></polygon><rect x="74.94" y="10.22" width="6.81" height="6.81"></rect><rect x="88.56" y="10.22" width="6.81" height="6.81"></rect><rect x="102.19" y="10.22" width="6.81" height="6.81"></rect><rect x="27.25" y="51.09" width="6.81" height="6.81"></rect><rect x="40.87" y="51.09" width="6.81" height="6.81"></rect></svg>
                </div>
                <h3 className={styles.h3}>Web Design</h3>
                <p>
                Crafting custom high-end website designs that are rooted in smart, brand-centric approaches and results-driven strategies is our area of expertise. We take pride in creating elegant solutions that showcase your brand in the best possible light.
                </p>
              </div>

              <div className={styles.item}>
                <div className={styles.img}>
                <svg viewBox="0 0 167.37 138.26"><path d="M0,0V138.26H167.37V0ZM160.1,7.28V21.83H7.28V7.28ZM7.28,131V29.11H160.1V131Z"></path><rect x="14.55" y="10.92" width="7.28" height="7.28"></rect><rect x="29.11" y="10.92" width="7.28" height="7.28"></rect><rect x="43.66" y="10.92" width="7.28" height="7.28"></rect><rect x="54.58" y="83.69" width="29.11" height="7.28"></rect><path d="M53.31,66.37,27.84,44.54,23.1,50.06,45.35,69.13,23.1,88.2l4.74,5.53L53.31,71.89a3.63,3.63,0,0,0,0-5.52Z"></path></svg>
                </div>
                <h3 className={styles.h3}>Web Development</h3>
                <p>
                Whether it&lsquo;s corporate website development, e-commerce solutions, custom web applications, or product configurators, our code exhibits intelligence and elegance.
                 </p>
              </div>

              <div className={styles.item}>
                <div className={styles.img}>
                  <svg viewBox="0 0 150.67 150.67"><path d="M110.11,69.38a28.13,28.13,0,0,1-9.38,0,3.23,3.23,0,0,0-3.4,1.73l-2.18,4.37-6.74-2.79L90,68.05a3.2,3.2,0,0,0-1.18-3.63,28.43,28.43,0,0,1-6.64-6.63,3.24,3.24,0,0,0-3.62-1.18l-4.63,1.54-2.79-6.74,4.36-2.18a3.21,3.21,0,0,0,1.73-3.39,28.13,28.13,0,0,1,0-9.38,3.21,3.21,0,0,0-1.73-3.4l-4.37-2.19,2.79-6.74,4.64,1.55a3.22,3.22,0,0,0,3.62-1.18,28.24,28.24,0,0,1,6.63-6.64L85,12.64a34.52,34.52,0,0,0-6.66,6.23l-5.3-1.76a3.21,3.21,0,0,0-4,1.81L64,31.18a3.2,3.2,0,0,0,1.52,4.09l5,2.5a35.4,35.4,0,0,0,0,6.75l-5,2.5A3.2,3.2,0,0,0,64,51.11L69.1,63.37a3.22,3.22,0,0,0,4,1.81l5.29-1.76a34.14,34.14,0,0,0,4.78,4.76l-1.77,5.3a3.21,3.21,0,0,0,1.82,4l12.25,5.07a3.15,3.15,0,0,0,1.23.25A3.22,3.22,0,0,0,99.55,81L102,76a34.6,34.6,0,0,0,6.75,0l2.5,5L117,78.14l-3.51-7A3.26,3.26,0,0,0,110.11,69.38Z"></path><path d="M104.66,57.7a15,15,0,0,0,12.91-7.44L112,47a8.49,8.49,0,1,1-9.48-12.46l-1.6-6.21a14.9,14.9,0,0,0,3.72,29.33Z"></path><path d="M79.49,82.47,74.41,70.21a3.2,3.2,0,0,0-4-1.81l-5.3,1.76a34.68,34.68,0,0,0-4.77-4.77l1.76-5.3a3.21,3.21,0,0,0-1.81-4L48.06,51A3.21,3.21,0,0,0,44,52.57l-2.5,5a34.6,34.6,0,0,0-6.75,0l-2.49-5A3.23,3.23,0,0,0,28.13,51L15.88,56.12a3.2,3.2,0,0,0-1.82,4l1.76,5.3A34.88,34.88,0,0,0,9.6,72.06l5.22,3.73a28.24,28.24,0,0,1,6.63-6.64,3.22,3.22,0,0,0,1.18-3.62L21.09,60.9l6.74-2.79L30,62.47A3.24,3.24,0,0,0,33.4,64.2a28.46,28.46,0,0,1,9.39,0,3.21,3.21,0,0,0,3.39-1.73l2.19-4.37,6.74,2.79-1.55,4.64a3.2,3.2,0,0,0,1.18,3.61,28.47,28.47,0,0,1,6.64,6.64A3.24,3.24,0,0,0,65,77l4.63-1.54,2.79,6.74-4.36,2.18a3.21,3.21,0,0,0-1.73,3.39,28.39,28.39,0,0,1,0,9.38,3.21,3.21,0,0,0,1.73,3.4l4.36,2.19-2.79,6.73L65,107.9a3.2,3.2,0,0,0-3.62,1.18,28.82,28.82,0,0,1-6.63,6.64l3.72,5.22a34.92,34.92,0,0,0,6.67-6.24l5.3,1.77a3.21,3.21,0,0,0,4-1.82l5.08-12.25A3.2,3.2,0,0,0,78,98.31l-5-2.5a34.6,34.6,0,0,0,0-6.75l5-2.5A3.2,3.2,0,0,0,79.49,82.47Z"></path><path d="M38.47,76.94a16,16,0,0,0-16,16h6.41a9.62,9.62,0,1,1,9.62,9.61V109a16,16,0,1,0,0-32Z"></path><path d="M128.23,64.11a64.12,64.12,0,1,0-64.12,64.12A64.19,64.19,0,0,0,128.23,64.11ZM64.11,121.82a57.71,57.71,0,1,1,57.71-57.71A57.78,57.78,0,0,1,64.11,121.82Z"></path><path d="M149.73,135.58l-28.85-28.85-4.53,4.53,26.58,26.59-5.08,5.08-26.59-26.58-4.53,4.53,28.85,28.85a3.19,3.19,0,0,0,2.27.94,3.16,3.16,0,0,0,2.26-.94l9.62-9.62A3.2,3.2,0,0,0,149.73,135.58Z"></path></svg>
                </div>
                <h3 className={styles.h3}>SEO</h3>
                <p>
                The landscape of search engine optimization regulations is constantly evolving, and we make it our priority to stay ahead of the curve. By staying up-to-date with the latest changes, we are able to effectively assist our clients in achieving higher rankings.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                <svg viewBox="0 0 189 174.28"><path d="M157,114.77,138.67,83.38A30.8,30.8,0,0,0,145.91,72a23,23,0,0,0,1.29-8.86A19.07,19.07,0,0,0,140.93,50a21,21,0,0,0-4.81-3.22c-5.56-2.72-12.69-3.24-19.69-1.5L96,10.16A3.64,3.64,0,0,0,93,8.34a3.69,3.69,0,0,0-3.19,1.43L35.53,80.71,1.82,100A3.7,3.7,0,0,0,.5,105l25.56,43.83a3.7,3.7,0,0,0,3.2,1.85,3.81,3.81,0,0,0,1.83-.49l5.85-3.35,36.55,26.72a3.71,3.71,0,0,0,2.16.7,3.61,3.61,0,0,0,1.83-.49l18.27-10.44a3.68,3.68,0,0,0,.37-6.2L62.25,132.4l1.58-.9,0,0,90.42-11.25a3.69,3.69,0,0,0,2.75-5.52Zm-23.17-63.3a15.46,15.46,0,0,1,3.59,2.41,13.48,13.48,0,0,1,2.68,3.3,13.72,13.72,0,0,1,1.85,6.23,17.66,17.66,0,0,1-1,6.84,25,25,0,0,1-5,8.38L119.21,50A23.45,23.45,0,0,1,133.81,51.47Zm-58,117.24L42.59,144.47l15.28-8.74L91.05,160ZM29.84,144.86l-24-41.12,33.32-19,24,41.11Zm40-19.38a5.83,5.83,0,0,0-.51-1.14L43.76,80.49a6.48,6.48,0,0,0-.69-1L92.6,14.85l58.61,100.5Z"></path><path d="M139.86,25.41a3.35,3.35,0,1,1,2.45-6.24,45.31,45.31,0,0,1,25.58,58.77,3.35,3.35,0,1,1-6.24-2.45,38.64,38.64,0,0,0-21.79-50.08Z"></path><path d="M143.56,6.48A3.36,3.36,0,0,1,146,.23a67.8,67.8,0,0,1,38.27,87.91A3.35,3.35,0,0,1,178,85.68a61.09,61.09,0,0,0-34.48-79.2Z"></path></svg>
                </div>
                <h3 className={styles.h3}>Digital Marketing</h3>
                <p>
                  My carefully crafted SEO strategies are designed to increase
                  visibility within the algorithmic search results to deliver
                  relevant, targeted traffic to your website.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <svg viewBox="0 0 153.28 137.25"><path d="M75,0H60.64C45.78,0,33.48,9.14,29.51,18.29,18.65,20.72,11.24,30.52,11.24,42.82c0,.22,0,.44,0,.65C4.35,48,0,57.12,0,67.46A30.39,30.39,0,0,0,6.9,86.78c-1.11,7.46.4,17.8,6.49,24.75,3.23,3.68,9,8,18.73,7.65,6.1,12.1,16.33,18.07,31.05,18.07A69.43,69.43,0,0,0,75.65,136a3.4,3.4,0,0,0,2.79-3.35V3.4A3.4,3.4,0,0,0,75,0ZM37.64,114.94c.24-9.35,5.24-25.86,23-25.86v-6.8A27.56,27.56,0,0,0,38.41,92.72c-3.6-1.17-6.56-4.62-6.56-7H25c0,5.18,4.23,10.45,9.7,12.87A38,38,0,0,0,31,112.36c-5.25-.12-9.44-1.88-12.45-5.32-4.83-5.49-6-14.53-4.63-20.62a3.38,3.38,0,0,0-1-3.2c-3.64-3.47-6.1-9.8-6.1-15.76,0-8.62,3.81-16.27,9.48-19A3.41,3.41,0,0,0,18.17,45,19.63,19.63,0,0,1,18,42.82c0-8.11,4.3-14.67,10.78-17.18,1.6,17.94,13.24,20.52,24.67,20.52V39.35c-11.83,0-17.9-2.75-18.05-17.51,2.18-6.3,12.12-15,25.2-15h11V25.9c-6,1.51-12.58.09-15-5.89l-6.31,2.55c2.76,6.81,9.42,10.72,17.07,10.72a23.81,23.81,0,0,0,4.24-.39V54.28a15.94,15.94,0,0,0-8-2.29h0c-4.69,0-9.2,2.25-13.42,6.68-3.66,3.85-10.5,5.24-15,3.35A13.76,13.76,0,0,0,21.29,50.69V57.5c4.25,0,7.33,2.82,7.33,6.72,0,3.25-2.15,6.56-4.89,7.53L26,78.16A14.58,14.58,0,0,0,34.59,69a19.56,19.56,0,0,0,5.15.68,21.6,21.6,0,0,0,15.38-6.36c2.88-3,5.73-4.57,8.49-4.57h0c2.57,0,5.26,1.4,8,4v35.5a15.89,15.89,0,0,0-16.74,9.78l6.26,2.67a9.08,9.08,0,0,1,10.48-5.56v24.59C54.12,132.37,43.55,127.71,37.64,114.94Z"></path><path d="M149.88,54.43H137.33a46.91,46.91,0,0,0-5.27-12.77l9.08-9.45a3.41,3.41,0,0,0-.06-4.78l-15.3-15.17a3.4,3.4,0,0,0-4.77,0l-9.32,9.12a47.43,47.43,0,0,0-12.84-5.21V3.4A3.4,3.4,0,0,0,95.45,0H85.24V6.8h6.81V18.89a3.41,3.41,0,0,0,2.77,3.35,41.37,41.37,0,0,1,15.52,6.26,3.39,3.39,0,0,0,4.22-.43l8.81-8.62,10.54,10.46-8.59,8.94a3.4,3.4,0,0,0-.41,4.19,40.66,40.66,0,0,1,6.33,15.42,3.41,3.41,0,0,0,3.35,2.77h11.89V74.84H134.59a3.41,3.41,0,0,0-3.35,2.77A39.82,39.82,0,0,1,125,92.79a3.41,3.41,0,0,0,.46,4.24l8.57,8.63-10.43,10.46-9-8.65a3.4,3.4,0,0,0-4.19-.4,41.47,41.47,0,0,1-15.52,6.29,3.39,3.39,0,0,0-2.77,3.34v12.57H85.24v6.81H95.45a3.4,3.4,0,0,0,3.4-3.41V119.44a47.27,47.27,0,0,0,12.87-5.24l9.56,9.14a3.4,3.4,0,0,0,4.76-.06l15.17-15.21a3.39,3.39,0,0,0,0-4.8l-9.08-9.14a45.12,45.12,0,0,0,5.19-12.48h12.55a3.41,3.41,0,0,0,3.4-3.41V57.83A3.4,3.4,0,0,0,149.88,54.43Z"></path><path d="M115.86,67.8A30.53,30.53,0,0,0,85.24,37.42v6.8a23.58,23.58,0,1,1,0,47.15v6.8A30.53,30.53,0,0,0,115.86,67.8Z"></path></svg>
                </div>
                <h3 className={styles.h3}>Sales Optimization</h3>
                <p>
                With our expert conversion rate optimization and digital transformation strategies, we elegantly enhance sales leads, engagements, and market share.

                </p>
              </div>
             

              
              
            </div>
          </div>
        </section>

        <section className={styles.portfolio}>
          <div className={styles.container}>
            <div className={styles.header_space}>
              <header className={styles.header}>
                <h2 className={"h2"}>Projects</h2>
              </header>
              <div className="content">
                <p>
                  Leveraging established frameworks like WordPress CMS, Laravel,
                  ReactJS, React Native, AWS Cloud, Git, and more…I construct
                  highly performant, scalable, secure software in less time than
                  ever before. Striking a critical balance between custom
                  development and framework implementation to ensure each
                  project succeeds on time and on budget.
                </p>
                <a
                  href="mailto:nityahoyos@gmail.com"
                  className={"btn_link btn_link--light"}
                >
                  Get In Touch
                  <span className={styles.chevron}>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.showcase}>
              <div className={styles.device}>
                <div className={styles.singleimage}>
                  <div className={styles.overlay}>
                    <img src={`${godaddy.src}`} alt="" />
                  </div>
                </div>

                <div className={styles.overlaydeviceimage}>
                  <div
                    className={styles.overlaydevice}
                    style={{
                      background: `url('${device.src}') center center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
              <span className={styles.casestudy_name}>
                <h5>
                  <a
                    href="https://www.godaddy.com/ventureforward/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Venture Forward
                  </a>
                </h5>
                <span>Powered by: Javascript, HTML, SCSS, BEM, Wordpress</span>
                <div className={styles.case_about}>
                  GoDaddy Venture Forward is a research initiative that
                  quantifies the impact 23+ million online microbusinesses have
                  on their local economies, and provides a unique view into the
                  attitudes, demographics, and needs of these entrepreneurs.
                </div>
                <a
                  href="https://www.godaddy.com/ventureforward/"
                  target="_blank"
                  rel="noreferrer"
                  className={"btn_link "}
                >
                  View Site
                  <span className={styles.chevron}>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </span>
            </div>
            <div className={styles.showcase}>
              <div className={styles.device}>
                <div className={styles.singleimage}>
                  <div className={styles.overlay}>
                    <img src={`${organicolivia.src}`} alt="" />
                  </div>
                </div>

                <div className={styles.overlaydeviceimage}>
                  <div
                    className={styles.overlaydevice}
                    style={{
                      background: `url('${device.src}') center center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
              <span className={styles.casestudy_name}>
                <h5>
                  <a
                    href="https://www.organicolivia.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Organic Olivia
                  </a>
                </h5>
                <span>Powered by: Shopify, Javascript, HTML, SCSS, BEM</span>
                <div className={styles.case_about}>
                  Organic Olivia is a modern approach to traditional herbal
                  medicine. We blend science with intuition to create focused
                  formulas that get to the root cause.
                </div>
                <a
                  href="https://www.organicolivia.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={"btn_link "}
                >
                  View Site
                  <span className={styles.chevron}>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </span>
            </div>
            <div className={styles.showcase}>
              <div className={styles.device}>
                <div className={styles.singleimage}>
                  <div className={styles.overlay}>
                    <img src={`${muse.src}`} alt="" />
                  </div>
                </div>

                <div className={styles.overlaydeviceimage}>
                  <div
                    className={styles.overlaydevice}
                    style={{
                      background: `url('${device.src}') center center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
              <span className={styles.casestudy_name}>
                <h5>
                  <a
                    href="https://choosemuse.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Muse
                  </a>
                </h5>
                <span>Powered by: Wordpress, Javascript, HTML, SCSS, BEM</span>
                <div className={styles.case_about}>
                  Muse is a wearable brain sensing headband. The device measures
                  brain activity via 4 electroencephalography sensors. An
                  accompanying mobile app converts the EEG signal into audio
                  feedback that is fed to the user via headphones.
                </div>
                <a
                  href="https://choosemuse.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={"btn_link "}
                >
                  View Site
                  <span className={styles.chevron}>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.293 1.707 1.707.293 7.414 6l-5.707 5.707-1.414-1.414L4.585 6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </span>
            </div>
            <div className={styles.more_projects}>
              <div className={styles.more_projects_grid}>
                <div className={styles.projects}>
                  <header className={styles.projects_header}>
                    <h2 className="title">Personal Projects</h2>
                  </header>
                  <div className={styles.project}>
                    <a
                      href="https://github.com/tronsymphony/portfolio"
                      target="_blank"
                    >
                      <h3 className="title">ForwwardDesign</h3>
                      <p>Personal site made with Typescript and NextJs</p>
                    </a>
                  </div>
                  <div className={styles.project}>
                    <a
                      href="https://github.com/tronsymphony/wordpress-plugin"
                      target="_blank"
                    >
                      <h3 className="title">Wordpress Plugin</h3>
                      <p>A demo of my ability to make wordpress plugins</p>
                    </a>
                  </div>
                  <div className={styles.project}>
                    <a
                      href="https://github.com/tronsymphony/laravel-detailsite"
                      target="_blank"
                    >
                      <h3 className="title">Laravel Project</h3>
                      <p>
                        A project to learn Laravel that includes user
                        registration, reactjs frontend, and api creation
                      </p>
                    </a>
                  </div>
                </div>
                <div className={styles.projects}>
                  <header className={styles.projects_header}>
                    <h2 className="title">More Projects </h2>
                  </header>
                  <div className={styles.project}>
                    <a href="https://ireneneuwirth.com/" target="_blank">
                      <h3 className="title">Irene Neuwirth</h3>
                      <p>
                        High-end boutique showcasing the eponymous
                        designer&apos;s bold, colorful necklaces & earrings.
                      </p>
                    </a>
                  </div>
                  <div className={styles.project}>
                    <a href="https://www.stonefiregrill.com/" target="_blank">
                      <h3 className="title">Stone Fire Grill</h3>
                      <p>
                        A premier takeout, catering and fast-casual family
                        dining restaurant with locations across Southern
                        California offering generous family meals for everyone.
                      </p>
                    </a>
                  </div>
                  <div className={styles.project}>
                    <a href="https://seed.com/" target="_blank">
                      <h3 className="title">Seed</h3>
                      <p>
                        Seed Health, popularly known as Seed, is an American
                        health and life science company, most known for
                        developing probiotics. Founded in 2015 by Ara Katz and
                        Raja Dhir, Seed was founded to &ldquo;use bacteria to
                        improve human and environmental health&ldquo;.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
