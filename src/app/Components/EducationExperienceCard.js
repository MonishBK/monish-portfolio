'use client'

import { useEffect,useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import styles from "../CSS/About.module.css"

const EducationExperienceCard = ({icon,title,desc,duration}) => {

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
      if(window !== "undefined"){
        setShowComponent(true);
      }
  },[])

  return (
    showComponent &&
    <>
        <div className={`${styles.edu_exp_inner_box} ps-5 my-5 `}>
            <span style={{
                fontSize:13,
                backgroundColor:'rgba(128, 128, 128, 0.3)'
            }} > {duration} </span>

            <h5 className='pt-3'> {title} </h5>
            <p style={{
                fontSize:18,
                color:"grey"
            }}> {desc} </p>

            <div className={`${styles.edu_logo}`}>
                {icon}
            </div>

        </div>
    </>
  )
}

export default EducationExperienceCard