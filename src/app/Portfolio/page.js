'use client'

import { useEffect,useState } from "react"
import PortfolioCard from "../Components/PortfolioCard";
import Navbar from "../Components/Navbar";
import Headers from "../Components/Headers";
import styles from "../CSS/Portfolio.module.css"

const Portfolio =  () => {

  const [data, setData] = useState([]);
    
    const HandelGET = async () =>{
        
        const res = await fetch("/api/getprojects",{
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

    // HandelGET()

    useEffect(() => {
      if(window !== "undefined"){
        setShowComponent(true);
      }
      
    }, []);
    
    useEffect(() =>{
      HandelGET()
      if(window.screen.width > 450){
        let item = document.getElementById("horizontal_scroll");
        if(item){
          item.addEventListener("wheel",(e)=> {
            e.preventDefault()
            if (e.deltaY > 0) {
              item.scrollLeft += 400;
            }
            else { 
              item.scrollLeft -= 400
            }
            
          });
        }
      }
    })

    const [showComponent, setShowComponent] = useState(false);


  return (
    showComponent &&
    <>
    <title>Portfolio</title>
         <Navbar/>
        <div className={` ${styles.portfolio_container} ${styles.loading_rel} `}>
            <Headers hb="works" hf="my portfolio" />

            <div className={styles.portfolio_works} id='horizontal_scroll' >

            {

              data.length > 0?
              data.map((item)=>{
                return (
                      <PortfolioCard key={item._id} data={item} />
                )
              })
               :
              <div className={`${styles.loading}`} > </div>
              
            }


            </div>

        </div>
    </>
  )
}

export default Portfolio