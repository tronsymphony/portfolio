import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

import Image from "next/image";
import code from "../asset/code.jpg";
import fbr from "../asset/fbr.jpg";
import muse from "../asset/muse.jpg";
import stonefire from "../asset/stonefire.jpg";
import irene from "../asset/irene.jpg";
import nowrx from "../asset/nowrx.jpg";
import venture from "../asset/venture.jpg";
import sea from "../asset/sea.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nitya Hoyos | Full-Stack Wordpress, ReactJS, and Shopify Developer available for hire or contract work.</title>
        <meta name="description" content="Your one-stop for custom software development, web design, and app creation. Let me help you take your business to the next level." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@200;300;500;600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <section className={styles.welcome}>
          <div className={styles.video__fullscreen}>
            <video autoPlay loop playsInline muted>
              <source
                src="https://player.vimeo.com/video/806009163?background=1"
                type="video/mp4"
                sizes="1080"
              ></source>
              <source
                src="https://player.vimeo.com/external/367853827.hd.mp4?s=14d52988ba245932614cfe16bf3778ec72f720b3&amp;profile_id=174"
                type="video/mp4"
                sizes="720"
              ></source>
              <source
                src="https://player.vimeo.com/external/367853827.sd.mp4?s=31bbc714deea5c007440274cf54a6b66b9f415f5&amp;profile_id=165"
                type="video/mp4"
                sizes="576"
              ></source>
              <source
                src="https://player.vimeo.com/external/367853827.sd.mp4?s=31bbc714deea5c007440274cf54a6b66b9f415f5&amp;profile_id=164"
                type="video/mp4"
                sizes="360"
              ></source>
            </video>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <span className={styles.subtitle}>Hello, my name is</span>
              <h1 className={styles.h1}>Nitya Hoyos</h1>
              <span className={styles.title}>Full-stack developer</span>
              <p className={styles.context}>
               Im a  full-stack developer with a passion for building beautiful, functional, and secure web applications. With around 6 years of experience in the field, I have a deep understanding of both the front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, SQL, and more.
               </p>  <p className={styles.context}>
My expertise lies in creating responsive, user-friendly, and highly scalable web applications that meet the needs of clients and end-users alike. I enjoy collaborating with cross-functional teams and working on complex projects that challenge me to learn and grow as a developer.
</p><p className={styles.context}>
When I&apos;m not coding, you can find me exploring new technologies, attending developer meetups, or practicing yoga. If you&apos;re looking for a full-stack developer who is committed to delivering top-quality work and providing excellent customer service, I&apos;m the one you need. Let&apos;s work together and build something great!
              </p>
              <div className={styles.btn}>
                <a href="mailto:nityahoyos@gmail.com" className={styles.btn_link}>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          

        
        </section>
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
              <h2 className={"h2"}>Portfolio.</h2>
            </header>
            <div className={styles.grid}>
              <div className={styles.portfolio_box}>
                <div className={styles.portfolio_img}>
                  <div className={styles.portfolio_info}>
                    <h5>
                      <a
                        href="https://brileyfin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        B Riley Financial
                      </a>
                    </h5>
                    <span>Wordpress</span>
                  </div>
                  <div className={styles.gallery_link}>
                    <a href="https://brileyfin.com/">
                      <img src={fbr.src} alt="Childhood" role="button"></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.portfolio_box}>
                <div className={styles.portfolio_img}>
                  <div className={styles.portfolio_info}>
                    <h5>
                      <a
                        href="https://www.stonefiregrill.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Stone Fire Grill
                      </a>
                    </h5>
                    <span>Wordpress</span>
                  </div>
                  <div className={styles.gallery_link}>
                    <a href="https://www.stonefiregrill.com/">
                      <img src={stonefire.src} alt="Childhood" role="button"></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.portfolio_box}>
                <div className={styles.portfolio_img}>
                  <div className={styles.portfolio_info}>
                    <h5>
                      <a
                        href="https://nowrx.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        NowRx Pharmacy
                      </a>
                    </h5>
                    <span>Wordpress</span>
                  </div>
                  <div className={styles.gallery_link}>
                    <a href="https://nowrx.com/">
                      <img
                        src={nowrx.src}
                        alt="Childhood"
                        role="button"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.portfolio_box}>
                <div className={styles.portfolio_img}>
                  <div className={styles.portfolio_info}>
                    <h5>
                      <a
                        href="https://ireneneuwirth.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Irene Neuwirth
                      </a>
                    </h5>
                    <span>Shopify</span>
                  </div>
                  <div className={styles.gallery_link}>
                    <a href="https://ireneneuwirth.com/">
                      <img src={irene.src} alt="Childhood" role="button"></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.portfolio_box}>
                <div className={styles.portfolio_img}>
                  <div className={styles.portfolio_info}>
                    <h5>
                      <a
                        href="https://choosemuse.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Muse
                      </a>
                    </h5>
                    <span>Shopify</span>
                  </div>
                  <div className={styles.gallery_link}>
                    <a href="https://choosemuse.com/">
                      <img src={muse.src} alt="Childhood" role="button"></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.portfolio_box}>
                <div className={styles.portfolio_img}>
                  <div className={styles.portfolio_info}>
                    <h5>
                      <a
                        href="https://www.godaddy.com/ventureforward/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Venture Forward
                      </a>
                    </h5>
                    <span>Wordpress</span>
                  </div>
                  <div className={styles.gallery_link}>
                    <a href="https://www.godaddy.com/ventureforward/">
                      <img src={venture.src} alt="Childhood" role="button"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
         
            
          </div>
        </section>

        

        <section className={styles.services}>
         

          <div className={styles.container}>
            <header className={styles.heade}>
              <h2 className={styles.h2}>Services & Technologies.</h2>
              <p>
              Transform your vision into a reality with my expert development skills. From ideation to launch, I&apos;ll bring your project to life with cutting-edge technology and unparalleled attention to detail.
              </p>

              <div className={"btn"}>
                <a href="mailto:nityahoyos@gmail.com" className={"btn_link"}>
                  Get In Touch
                </a>
              </div>
            </header>
            <div className={styles.content}>
              <div className={styles.item}>
                <h3 className={styles.h3}>ecommerce</h3>
                <p>
                As an eCommerce developer, I can help you take your business online and reach a wider audience. With my expertise in building secure and user-friendly eCommerce websites, you can provide a seamless shopping experience for your customers, whether they&apos;re on a desktop or mobile device.
                </p>
              </div>

              <div className={styles.item}>
                <h3 className={styles.h3}>React JS</h3>
                <p>
                React JS is a popular JavaScript library used for building dynamic and interactive user interfaces. As a React JS developer, I specialize in creating fast, scalable, and maintainable web applications that provide an exceptional user experience. By using React JS, I can help you build a responsive and engaging website that meets your business goals and exceeds your customers&apos; expectations.
                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>Wordpress</h3>
                <p>
                  Maximize your online potential with our Wordpress services! We
                  specialize in Wordpress design, development, and maintenance,
                  ensuring that your website runs smoothly and effectively. Our
                  team of experts can help you create a stunning website that
                  attracts and engages your audience. Plus, I offer ongoing
                  support to ensure that your website stays up-to-date and
                  secure. Contact us today to learn how I can take your
                  Wordpress website to the next level.
                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>Shopify</h3>
                <p>
                If you&apos;re looking to build a website, WordPress is a great option. It&apos;s a user-friendly, customizable, and versatile platform that powers over 40% of all websites on the internet. As a WordPress developer, I have the expertise to help you create a stunning and functional website that meets your needs and goals. I can handle everything from customizing themes and plugins to optimizing your site for search engines and improving its performance. With my WordPress service, you can have a website that not only looks great but also performs well and delivers an outstanding user experience.
                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>Laravel</h3>
                <p>
                  Looking for a powerful and reliable web development framework?
                  Look no further than Laravel! Our Laravel services provide
                  top-notch development solutions that are efficient, scalable,
                  and secure. With a range of features such as robust
                  authentication systems, efficient routing, and powerful
                  templates, I can create a custom web application that meets
                  your unique needs. Let us help you bring your ideas to life
                  and take your business to the next level with Laravel. Contact
                  us today to learn more.
                </p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.h3}>web design</h3>
                <p>
                As a web design developer, I specialize in creating websites that not only look beautiful but also function seamlessly. My web design service involves taking your unique vision and turning it into a professional and user-friendly website that attracts visitors and drives conversions.

Using the latest design techniques and technologies, I work closely with you to ensure that every aspect of your website meets your specific needs and goals. From layout and color schemes to functionality and usability, I ensure that your website stands out from the competition and delivers a positive user experience.
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
