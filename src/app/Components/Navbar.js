'use client'

import { useEffect,useState } from "react";
import { usePathname } from "next/navigation";
import { ImHome3 } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiOutlineMenu,AiFillFolderOpen } from "react-icons/ai";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

import styles from "../CSS/Home.module.css"


const Navbar = () => {

  const pathname = usePathname()
  const [showComponent, setShowComponent] = useState(false);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    if(window !== "undefined"){
      setShowComponent(true);
    }
},[])


    // useEffect(() => {
    //   window.addEventListener('resize', ()=>{
    //     let over_lay = document.getElementById("overlay_nav").style
    //     if(window.screen.width > 991){
    //       over_lay.display = "none"
    //       // document.getElementById("more_btn").style.display = "none"
    //     }
    //   });
    // });
  

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
      icon:<AiFillFolderOpen className={`${styles.nav_icon}`}/>
    },
    {
      name:'Contact', 
      link:'/Contact',
      icon:<HiMailOpen className={`${styles.nav_icon}`}/>
    }
  ] 


  return (
    showComponent &&
    <div className={`${styles.main_nav}`}>
    
        <nav className={`${styles.nav_bar}`}>
        <div className={`${styles.inner_nav}`}>

          {
            navlink.map((item) => {
              return(
                    <div key={item.name} className={`${styles.nav_items} ${pathname === item.link? styles.active_nav : '' }  `}>
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
           setSlide(true)
          // document.getElementById("overlay_nav").style.display = "flex"
        }} >
          <AiOutlineMenu/>
        </div>

      </nav>

      {/* navbar overlay */}
        <div className={` ${styles.overlay_navbar} ${slide ? styles.show_nav : ""}`} id="overlay_nav" >

          <div className={`${styles.inner_overlay}`}>
            <div className={`${styles.cancel_nav}`}  >
                <RxCross2  onClick={()=>{
                  setSlide(false)
                // document.getElementById("overlay_nav").style.display = "none"
            }} />
            </div>
            <ul>

              {
                navlink.map((ele)=>{
                 
                  return(
                        <li key={ele.name}>
                      <Link href={ele.link} className={`${pathname=== ele.link? styles.active_nav_res : '' }`} >
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