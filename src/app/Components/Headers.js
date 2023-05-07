'use client'

import { useEffect,useState } from "react"

const Headers = ({hb,hf}) => {

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if(window !== "undefined"){
      setShowComponent(true);
    }
},[])

    const text = hf.split(" ")

  return (
    showComponent &&
    <>
         <div className={`row  text-center heading_con `}>
            <h1 className={`heading_behind`}>{hb}</h1>
             <h1 className={`heading_front`}>{text.slice(0,-1).map((ele) =>  ele+" ")} <span>{text[text.length-1] }</span></h1>
        </div>
    </>
  )
}

export default Headers