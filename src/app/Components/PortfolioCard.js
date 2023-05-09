'use state'

import { useState,useEffect } from 'react';
import Link from 'next/link'
import styles from "../CSS/Portfolio.module.css"
import { BsArrowRightShort } from "react-icons/bs";
import Image from 'next/image';

const PortfolioCard = ({data}) => {

  const {title,language,description,_id,pic_name} = data;

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if(window !== "undefined"){
      setShowComponent(true);
    }
},[])

  return (
    showComponent &&
    <>
          <div className={`${styles.container}`}>
              <div className={`${styles.card}`}>
                  <div className={`${styles.img}`}>
                    {/* <img src="/images/project.png"/> */}
                    <Image
                      src={`/images/${pic_name}.jpg`}
                      width={350}
                      height={200}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className={`${styles.top_text}`}>
                    <div className={`${styles.name}`}>
                        {title}
                    </div>
                    <p>
                        {language}
                    </p>
                  </div>
                  <div className={`${styles.bottom_text}`}>
                    <div className={`${styles.text}`}>
                        {
                          (description.length > 200) ? description.slice(0,200): description
                        }...
                    </div>
                    <Link href={`/Portfolio/${_id}`} className={`main_btn mt-3`} style={{
                      width: 120,
                      height:35
                    }}  >
                          <span className={`btn_text`} >read more</span>
                          <span  className={`arrow_mark`}>
                              <BsArrowRightShort className='fw-bolder'  />
                          </span>
                          </Link>
                  </div>
              </div>
            </div>
    </>
  )
}

export default PortfolioCard