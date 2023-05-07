'use client'

import styles from "./CSS/Home.module.css"
import { useRouter } from "next/navigation";
import { BsArrowRightShort } from "react-icons/bs";

const NotFound = () => {

    const router = useRouter()

  return (
    <>
        <div className={`${styles.notfound} `} >
            <div className={`${styles.content}`}>
                <h1>404</h1>
                <p>Oops!.. Page not found</p>
 
                    <div onClick={()=> router.back() } className={`main_btn `}  >
                    <span className={`btn_text`} >go back</span>
                    <span  className={`arrow_mark`}>
                        <BsArrowRightShort className='fw-bolder fs-3'  />
                    </span>
                    </div>
            </div>
        </div>
    </>
  )
}

export default NotFound