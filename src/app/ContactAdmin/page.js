'use client'

import { useEffect,useState } from "react";
import styles from "../CSS/ContactAdmin.module.css"
import { MdDelete,MdOpenInNew } from "react-icons/md";
import Link from "next/link";

const ContactAdmin = async () =>{

    const [data, setData] = useState([]);
    const [showComponent, setShowComponent] = useState(false);

    const HandelGET = async () =>{
        if(process.env.NODE_ENV === 'production'){
            await fetch(`/api/revalidate?path=/api/getcontacts&secret=${process.env.NEXT_PUBLIC_My_SECRET_TOKEN}`)
        }
        const res = await fetch("/api/getcontacts",{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'User-Agent': '*'
            }
          });
    
        const pro = await res.json();
        setData(pro.data)
    }

    useEffect(() => {
        if(window !== "undefined"){
          setShowComponent(true);
        }
        HandelGET()
        
      }, []);

    return(
        showComponent &&
        <>
        <title>Contact Admin</title>
           <div className={`row ${styles.contact_admin_main_con} pt-3 px-3`}>
            <div className={` row ${styles.contact_admin_headers} fs-4 py-2 mb-3 `}>
                <div className="col-lg-1 ">
                    SL.No
                </div>
                <div className="col-lg-3 ">
                    Name
                </div>
                <div className="col-lg-3 ">
                    email
                </div>
                <div className="col-lg-4 ">
                    subject
                </div>
                <div className="col-lg-1 ">
                    actions
                </div>

            </div>
            <div className={` ${styles.message_data_con} `}>
                {
                    data?.map((item,index)=>{
                        return <ContactData data={item} sl={index+1} key={item._id} HandelGET={HandelGET} /> 
                    })
                }
                
            </div>


           </div>
        </>
    )

}

export default ContactAdmin

const ContactData = ({data,sl,HandelGET}) =>{

    const {name,email,subject,_id} = data

    const HandlingDel = async (_id,name) =>{
        const ans = confirm("clicked the "+name)
        if(ans){
            // if(process.env.NODE_ENV === 'production'){
            //     await fetch(`/api/revalidate?path=/api/getcontacts&secret=${process.env.NEXT_PUBLIC_My_SECRET_TOKEN}`)
            // }
            await fetch(`https://monish-portfolio.vercel.app/api/revalidate?path=/api/getcontacts&secret=${process.env.NEXT_PUBLIC_My_SECRET_TOKEN}`)
            const res = await fetch(`/api/delcontact/${_id}`,{
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'User-Agent': '*'
                }
              });

              HandelGET()
        }
    }
    // let sl=1

    return(
        <>
            <div className={` row ${styles.contact_admin_data} fs-5 py-2 my-2 `}>
                    <div className="col-lg-1 ">
                        {sl}
                    </div>
                    <div className="col-lg-3 ">
                        {name}
                    </div>
                    <div className="col-lg-3 ">
                       <Link style={{ color:"#fff" }} href={`mailto:${email}`}>{email}</Link> 
                    </div>
                    <div className="col-lg-4 ">
                        {subject}
                    </div>
                    <div className={`col-lg-1  `}  >
                        <MdDelete className={`${styles.action_del_btn}`} onClick={()=>HandlingDel(_id,name) }  />
                        <MdOpenInNew  className={`ms-4 ${styles.action_link_btn} `}  />
                    </div>

                </div>
        </>
    )
}