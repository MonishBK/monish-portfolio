'use client'

import { useEffect,useState } from 'react';
import styles from './CSS/Home.module.css'
import { BsArrowRightShort } from "react-icons/bs";
import Link from 'next/link';
import Navbar from './Components/Navbar';
import Script from 'next/script';
import Typewriter from "typewriter-effect";

export default function Home() {

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if(window !== "undefined"){
      setShowComponent(true);
    }
},[])

  return (
    showComponent &&
    <>
    <title>Home </title>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    <Navbar />
      <main className={`${styles.main_container}`} >
          <div className={ ` row  `}>
            <div className={`col-lg-3 ${styles.left_side_container}`}></div>
          </div>
          <div className={`${styles.upper_container} `}>
              <div className={`${styles.pro_image}  `}></div>
              <div className={`${styles.content_div} `}>
                <h1><span>I&apos;M MONISH B K.</span> </h1>
                <h1>
                  <Typewriter
                    options={{
                      strings: ['web developer', 'Software developer'],
                      autoStart: true,
                      loop: true,
                    }}

                    />
  
                  </h1>
                <p className='py-3' >
                I&apos;m a Indian based full-stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                  </p>
                 <Link href='/About' className={`main_btn ${styles.home_page_btn}`}  >
                  <span className={`btn_text`} >more about me</span>
                  <span  className={`arrow_mark`}>
                    <BsArrowRightShort className='fw-bolder fs-3'  />
                  </span>
                 </Link>
              </div>
          </div>
      </main>
      </>
  )
}
