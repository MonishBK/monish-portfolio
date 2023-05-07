'use client'

import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation';
import { ImHome3 } from "react-icons/im";
import { FaToolbox } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

import styles from "../CSS/Home.module.css"


const Navbar = () => {

  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if(window !== "undefined"){
      setShowComponent(true);
    }
},[])


    useEffect(() => {
      window.addEventListener('resize', ()=>{
        let over_lay = document.getElementById("overlay_nav").style
        if(window.screen.width > 991){
          over_lay.display = "none"
          // document.getElementById("more_btn").style.display = "none"
        }
      });
    });
  


  const navlink = [
    {
      name:'Home',
      link:'/',
      icon:<ImHome3 className={`${styles.nav_icon}`}/>
    },
    {
      name:'About',
      link:'/About',
      icon:<BsFillPersonFill className={`${styles.nav_icon}`}/>
    },
    {
      name:'Portfolio',
      link:'/Portfolio',
      icon:<FaToolbox className={`${styles.nav_icon}`}/>
    },
    {
      name:'Contact',
      link:'/Contact',
      icon:<HiMailOpen className={`${styles.nav_icon}`}/>
    }
  ] 


  return (
    <div className={`${styles.main_nav}`}>
    
        <nav className={`${styles.nav_bar}`}>
        <div className={`${styles.inner_nav}`}>

          {
            navlink.map((item) => {
              return(
                    <div key={item.name} className={`${styles.nav_items} ${router.pathname === item.link? styles.active_nav : '' }  `}>
                        <Link href={item.link}>
                            {item.icon}
                            <p className=' px-4 fw-bold'>{item.name}</p> 
                        </Link>
                    </div>
              ) 
            })
          }
           
        </div>

        <div className={`${styles.responsive_navbar}`} id="more_btn" onClick={()=>{
          document.getElementById("overlay_nav").style.display = "flex"
        }} >
          <AiOutlineMenu/>
        </div>

      </nav>

      {/* navbar overlay */}
        <div className={` ${styles.overlay_navbar}`} id="overlay_nav" >

          <div className={`${styles.inner_overlay}`}>
            <div className={`${styles.cancel_nav}`} onClick={()=>{
              document.getElementById("overlay_nav").style.display = "none"
            }} >
                <RxCross2/>
            </div>
            <ul>

              {
                navlink.map((ele)=>{
                  return(
                        <li key={ele.name}>
                      <Link href={ele.link} className={`${router.pathname === ele.link? styles.active_nav_res : '' }`} >
                        {ele.icon}
                      <span>{ele.name}</span>
                      </Link>
                      </li>
                  )
                })

              }
            </ul>
          </div>

        </div>




    </div>
  )
}

export default Navbar