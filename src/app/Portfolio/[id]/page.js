'use client'

import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation';
import styles from "../../CSS/Portfolio.module.css"  
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";

const Works =  ({params}) => {

  const router = useRouter()
  const [showComponent, setShowComponent] = useState(false);
  const _id = params.id;
  const [data, setData] = useState({});

  const HandelData = async () => {

    const res = await fetch(`/api/getprojects/${_id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*'
        }
      });
  
      const data = await res.json();
  
      setData(data.data)
      
  }


  useEffect(() => { 
    HandelData()
    // console.log(data.github_link)
    if(window !== "undefined"){
      setShowComponent(true);
    }
  }, []);



  return (
    showComponent &&
    <>
        <div className={` ${styles.projects_container}`}>
        {/* <Headers hb="works" hf="my portfolio" /> */}
        
        <div className={`${styles.video_responsive}`}>
          <iframe
            // width="100"
            // height="100"
            // src={`https://www.youtube.com/embed/E5fT6RFf66o`}
            src={data.youtube_link}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allow=" "
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className={`${styles.project_description}`}>
          <h4>
            title: <span> {data.title} </span>
          </h4>
          <h4>
            Language: <span> {data.language} </span>
          </h4>
          <h4>
            Description:
          </h4>
            <p>
              {data.description}
            </p>

            <Link href={data.github_link? data.github_link : "/"} target="_blank" className={`main_btn mt-3`}   >
              <span className={`btn_text`} >Project link</span>
              <span  className={`arrow_mark`}>
              <BsGithub className='fw-bolder fs-3 '  />
              </span>
            </Link>

        </div>

          <IoMdArrowBack  onClick={()=> router.back()} className={`${styles.go_back} fs-3`} />

      </div>
    </>
  )
}

export default Works