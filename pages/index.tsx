import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "./footer";
import { useState, useRef } from 'react'

import device from "../asset/device-mbp-15-nonotch.png";
import muse from "../asset/muse.webp";
import organicolivia from "../asset/organicolivia.webp";
import godaddy from "../asset/godaddy.webp";

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
  Points, PointMaterial
} from "@react-three/drei";
import { SSAOPass } from "three-stdlib";
import { buffer, random } from "maath";
import Scene from '../components/scene';
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'


extend({ SSAOPass });

//@ts-ignore
function Stars(props) {
  const ref = useRef()
  //@ts-ignore
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2 }))
  useFrame((state, delta) => {
    //@ts-ignore
    ref.current.rotation.x -= delta / 50
    //@ts-ignore
    ref.current.rotation.y -= delta / 10
  })
  return (
    //@ts-ignore
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#05FFA1" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}


export default function Home() {
  const [{ background }, set] = useSpring({ background: 'linear-gradient(45deg, #000, #222255)', fill: '#12071f' }, [])
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
        <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=DM+Sans:wght@400;500;700&family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;300;700&family=Oswald:wght@200;400;500;600;700&family=Roboto+Mono:wght@300;500;700&family=Space+Mono:wght@400;700&family=Syncopate:wght@400;700&family=VT323&family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        {/* @ts-ignore   */}
        <a.section className={styles.welcome} style={{ background }}>
          <div className={styles.video__fullscreen}>
            <Canvas className="canvas" dpr={[1, 2]}>
                <Scene setBg={set} />
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
              <Stars  />
            </Canvas>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <span className={styles.subtitle}>Hello, my name is</span>
              <h1 className={styles.h1}>
                Nitya Hoyos<span>_</span>
              </h1>
              {/* abouy curious . ai to help user understand webpage */}
              <p className={styles.context}>
                I&apos;m a full-stack developer engineering elegant, performant,
                and powerful web applications.
              </p>
              <p className={styles.context}>
                I am available for contract work or full-time positions.
              </p>
            </div>
          </div>
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
        <section className={styles.portfolio}>
          <div className={styles.container}>
            <header className={styles.header}>
              <h2 className={"h2"}>Contract work and <br></br> agency projects</h2>
              <p>
              Leveraging established frameworks like WordPress CMS, Laravel, ReactJS, React Native, AWS Cloud, Git, and more…I construct highly performant, scalable, secure software in less time than ever before.  Striking a critical balance between custom development and framework implementation to ensure each project succeeds on time and on budget.
              </p>
              <a href="mailto:nityahoyos@gmail.com" className={"btn_link btn_link--light"}>
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
            </header>
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
                    <h2 className="title">More Projects I Have Worked On</h2>
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

        <section className={styles.services}>
          <div className={styles.overlay}></div>
          <div className={styles.container}>
            <header className={styles.heade}>
              <h2 className={styles.h2}>Services & Technologies.</h2>
              <p>
                Transform your vision into a reality with my expert development
                skills. From ideation to launch, I&apos;ll bring your project to
                life with cutting-edge technology and unparalleled attention to
                detail.
              </p>

              <div className={"btn"}>
                <a href="mailto:nityahoyos@gmail.com" className={"btn_link btn_link--light"}>
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
            </header>
            <div className={styles.content}>
              <div className={styles.item}>
                <h3 className={styles.h3}>Web Design</h3>
                <p>
                I specialize in developing interactive, scalable, brand-oriented, and business-ready customized web design.
                </p>
              </div>

              <div className={styles.item}>
                <h3 className={styles.h3}>Web Development</h3>
                <p>
                Be it static, customized, or dynamic, I follow industry best practices to develop attractive and highly functional websites.


                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>E-commerce</h3>
                <p>
                Robust, aesthetically pleasing, and conversion-focused e-commerce website development.
                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>SEO</h3>
                <p>
                My carefully crafted SEO strategies are designed to increase visibility within the algorithmic search results to deliver relevant, targeted traffic to your website.
                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>Digital Marketing</h3>
                <p>
                I specialize in digital marketing campaigns that delivers content that wow&apos;s across all paid advertising channels.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}