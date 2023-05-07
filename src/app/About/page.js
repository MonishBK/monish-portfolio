'use client'

import { useState,useEffect } from 'react';
import useDownloader from 'react-use-downloader';
import Navbar from '../Components/Navbar';
import styles from "../CSS/About.module.css"
import Headers from '../Components/Headers';
import Link from 'next/link'
import { ProgressSkills } from '../Components/ProgressSkills';
import { FaGraduationCap,FaDownload } from "react-icons/fa";

import EducationExperienceCard from '../Components/EducationExperienceCard';

const Page = () => {

    const [showComponent, setShowComponent] = useState(false);
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();

    const fileUrl = "resume.pdf"
    const filename = 'monish_resume.pdf'; 


    useEffect(() => {
      if(window !== "undefined"){
        setShowComponent(true);
      }
  },[])
    
  return (
    showComponent &&
    <>
        <title>About</title>
        <Navbar/>
        <div className={` ${styles.about_container}`}>
            <Headers hb="resume" hf="about me" />

            <div className={`row  py-5 ${styles.personal_info}`}>
                <div className="col-lg-6 col-sm-12  ">

                    <h3 className='pb-4 text-uppercase'>personal infos</h3>

                    <div className={`${styles.about_pro_pic}`}>

                    </div>


                    <div className={`${styles.infos}`}>
                        <div className={`col-sm-6 ${styles.l_info}`}>
                           <p className={`${styles.inner_info}`}> name :   <span>monish b k</span></p>  
                        </div>
                        <div className={`col-sm-6 ${styles.r_info}`}>
                            <div className={`${styles.inner_info}`}>Address : <span>Bengaluru, Karnataka</span></div>
                        </div>
                    </div>
                    <div className={`${styles.infos}`}>
                        <div className={`col-sm-6 ${styles.l_info}`}>
                            <div className={`${styles.inner_info}`}>age : <span>{getAge('2000-12-17')}</span></div>
                        </div>
                        <div className={`col-sm-6 ${styles.r_info}`}>
                            <div className={`${styles.inner_info}`}>Phone : <span>8310582079</span></div>
                        </div>
                    </div>
                    <div className={`${styles.infos}`}>
                        <div className={`col-sm-6 ${styles.l_info}`}>
                            <div className={`${styles.inner_info}`}>Nationality : <span>Indian</span></div>
                        </div>
                        <div className={`col-sm-6 ${styles.r_info}`}>
                            <div className={`${styles.inner_info}`}>email : <span>monishbk17@gmail.com</span></div>
                        </div>
                    </div>

                    <div className={`${styles.infos}`}>
                        <div className={`col-sm-6 ${styles.l_info}`}>
                            <div className={`${styles.inner_info}`}>Freelance : <span>Available</span></div>
                        </div>
                        <div className={`col-sm-6 ${styles.r_info}`}>
                            <div className={`${styles.inner_info}`}>language : <span>Kannada,Hindi,English</span></div>
                        </div>
                    </div>

                    <Link href='/About' className={`main_btn mt-3`} onClick={() => download(fileUrl, filename)}  >
                    <span className={`btn_text`} >download cv</span>
                    <span  className={`arrow_mark`}>
                        <FaDownload className='fw-bolder '  />
                    </span>
                    </Link>

                </div>
                <div className="col-lg-6 col-sm-12 "></div>

            </div>

            <div className={`${styles.saparator_div}`}></div>

            <div className={`row pt-5 ${styles.personal_info}`}>

                <h4 className='text-center text-uppercase'>my Skills</h4>

                <div className={`${styles.skills_con} pt-5`} >

                    <div className={`${styles.inner_skills}`} >
                        <div className={`${styles.inner_skills_con}`}>
                            <ProgressSkills percentage="80" lang="HTML" />
                            <ProgressSkills percentage="90" lang="CSS" />
                        </div>
                        <div className={`${styles.inner_skills_con}`}>
                            <ProgressSkills percentage="90" lang="SCSS" />
                            <ProgressSkills percentage="85" lang="java script" />
                        </div>

                    </div>

                    <div className={`${styles.inner_skills}`} >
                        <div className={`${styles.inner_skills_con}`}>
                            <ProgressSkills percentage="60" lang="Node.JS" />
                            <ProgressSkills percentage="60" lang="MongoDB" />
                        </div>
                        <div className={`${styles.inner_skills_con}`}>
                            <ProgressSkills percentage="85" lang="React.JS" />
                            <ProgressSkills percentage="70" lang="Next.JS" />
                        </div>

                    </div>

                    <div className={`${styles.inner_skills}`} >
                        <div className={`${styles.inner_skills_con}`}>
                            <ProgressSkills percentage="75" lang="MERN full stack" />
                            <ProgressSkills percentage="80" lang="python" />
                        </div>
                        <div className={`${styles.inner_skills_con}`}>
                            <ProgressSkills percentage="70" lang="c " />
                            <ProgressSkills percentage="60" lang="core java" />
                        </div>

                    </div>



                </div>
            </div>

            <div className={`${styles.saparator_div}`}></div>

            <div className={`row pt-5 ${styles.personal_info}`}>
                <h4 className='text-center text-uppercase'>Education & Experience</h4>

                <div className={`row ${styles.edu_exp_con} pt-5`} >
                    <div className="col-sm-6 ">
  
                        <EducationExperienceCard  
                        icon={<FaGraduationCap/>} 
                        duration="2021-2023"
                        title="Post Graduation ( Master of Computer Application )"
                        desc="Sir M. Visvesvaraya Institute of Technology, Yelahanka."
                        />
  
                        <EducationExperienceCard  
                        icon={<FaGraduationCap/>} 
                        duration="2018-2021"
                        title="Bachelor of science ( Electronics, Mathematics , Computer Science )"
                        desc="Seshadripuram First Grade College, Yelahanka."
                        />
  
                        <EducationExperienceCard  
                        icon={<FaGraduationCap/>} 
                        duration="2016-2018"
                        title="Pre University College(PCMC)"
                        desc="SJR PU College, Anand Rao circle"
                        />
  
                        <EducationExperienceCard  
                        icon={<FaGraduationCap/>} 
                        duration="2015-2016"
                        title="Secondary School Leaving Certificate (SSLC )"
                        desc="UAS campus school, Hebbal"
                        />

                    </div>

                    <div className="col-sm-6  ">

                        {/* <EducationExperienceCard 
                         icon={<FaToolbox/>} 
                         duration="2018-2000"
                         title="Sir M Visvesvaraiya Institute of technology"
                         desc="Lorem ipsum dolor sit amet codfbfghfgfgh nsectetur adipisicing elit. Adipisci, in?"
                         /> */}


                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Page