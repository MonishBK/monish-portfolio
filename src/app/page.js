'use client'

import { useEffect,useState } from 'react';
import styles from './CSS/Home.module.css'
import { BsArrowRightShort } from "react-icons/bs";
import Link from 'next/link';
import Navbar from './Components/Navbar';
import Head from 'next/head';
import Script from 'next/script';

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
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    </Head>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    <Navbar />
      <main className={`${styles.main_container}`} >
          <div className={ ` row  `}>
            <div className={`col-lg-3 ${styles.left_side_container}`}></div>
          </div>
          <div className={`${styles.upper_container} `}>
              <div className={`${styles.pro_image}  `}></div>
              <div className={`${styles.content_div} `}>
                <h1><span>I'M MONISH B K.</span> </h1>
                <h1>web designer</h1>
                <p className='py-3' >Lorem ipsum perspiciatis doloremque  totam reiciendis consequuntur dolore, fuga, nulla, culpa voluptatibus deserunt laudantium nam minus nihil eius?</p>
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
