'use client'

import { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import styles from "../CSS/Contact.module.css"
import Headers from '../Components/Headers'
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HiMailOpen } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter,BsGithub,BsLinkedin } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    const [loading, setLoading] = useState(false);

      const inputEvent = (e) => {
        let { name, value } = e.target;
        console.log(name, value);
    
        setContactData({ ...contactData, [name]: value });
      };
    
      const PostData = async(e) =>{

        e.preventDefault();
        setLoading(true)

        let { name, email, subject, message} = contactData;

        // validation
        const u_name = document.getElementById("u_name");
        const u_mail = document.getElementById("u_mail");
        const sub = document.getElementById("sub");
        const msg = document.getElementById("msg");

        const isEmail = (emailVal) => {
            let atSynmol = emailVal.indexOf("@");
            if (atSynmol < 1) return false;
            let dot = emailVal.lastIndexOf(".");
            if (dot <= atSynmol + 2) return false;
            if (dot === emailVal.length - 1) return false;
            return true;
          };

          const showMsg = (curr_div, msg) =>{
            curr_div.setAttribute(
                "style",
                `border:2px solid #ffb400; box-shadow: 1px 1px 2px 1px rgba(16,128,234,.1);`
              );
              toast.error(msg);
        }
    
        const hideMsg = (curr_div) =>{
            curr_div.setAttribute(
                "style",
                `border: 1px solid gray; box-shadow: 1px 1px 2px 1px rgba(16,128,234,.1);`
              );
        }
    
        const allInput = (curr_div) =>{
            curr_div.setAttribute(
              "style",
              `border:2px solid #ffb400; box-shadow: 1px 1px 2px 1px rgba(16,128,234,.1);`
            );
        }

        // Trimming the Extra Spaces from the data
        name =name.trim();
        email =email.trim();
        subject =subject.trim();
        message = message.trim();

        if(name === "" && email === "" && subject === "" && message === ""){
            allInput(u_name)
            allInput(u_mail)
            allInput(sub)
            allInput(msg)
            toast.error("Please fill all the fields");
        }else if(name === "" || email === "" || subject === "" || message === ""){

             //validate username
            if (name === "") {
                showMsg(u_name, "name can not be blank")
            } else if (name.length <= 2) {
                showMsg(u_name, "name min 3 char")
            } else {
                hideMsg(u_name)
            }

             //validate email
            if (email === "") {
                showMsg(u_mail, "email can not be blank")
            } else if (!isEmail(email)) {
                showMsg(u_mail, "not a valid Email")
            } else {
                hideMsg(u_mail);
            }

             //validate Subject
             if (subject === "") {
                showMsg(sub, "subject can not be blank")
            } else if (subject.length <= 2) {
                showMsg(sub, "name min 3 char")
            } else {
                hideMsg(sub)
            }

             //validate message
             if (message === "") {
                showMsg(msg, "message can not be blank")
            } else if (message.length <= 2) {
                showMsg(msg, " min 3 char")
            } else {
                hideMsg(msg)
            }

        }else{
            let count = 0;
            var alpha = /^[A-Za-z]+$/;
            
            //validate username
            if (name === "") {
              showMsg(u_name, "name can not be blank")
              count = 0;
            } else if (name.length <= 2) {
              showMsg(u_name, "name min 3 char")
              count = 0;
            }
            else if(!alpha.test(name)){
              showMsg(u_name, "name cannot include number or any special character")
              count = 0;
      
            } else {
              hideMsg(u_name)
              count++;
            }


            //validate email
            if (email === "") {
                showMsg(u_mail, "email can not be blank")
                count = 0;
            } else if (!isEmail(email)) {
                showMsg(u_mail, "not a valid Email")
                count = 0;
            } else {
                hideMsg(u_mail);
                count++;
            }

            
            //validate Subject
            if (subject === "") {
                showMsg(sub, "subject can not be blank")
                count = 0;
            } else {
                hideMsg(sub);
                count++;
            }
            
            //validate message
            if (message === "") {
                showMsg(msg, "message can not be blank")
                count = 0;
            } else {
                hideMsg(msg);
                count++;
            }
            
            if(count === 4){
                console.log(process.env.URL)
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name, email, subject, message
                  }),
                });
          
                const data = await res.json();
          
                if (res.status === 422 || !data) {
                  // window.alert("Invalid registration ");
                  toast.error("Something went wrong");
                //   document.getElementById("load_img").style.display = "none"
                //   console.log("Invalid registration ");
                } else {
                  // window.alert(" Registration Successfull !!..");
                  toast.success("Message sent Successfull !!..");
                //   document.getElementById("load_img").style.display = "none"
                //   console.log("  Successfull !!..");
                  setContactData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  })
                }
        
              }

        }
        setLoading(false)
      }

    const [showComponent, setShowComponent] = useState(false);


    useEffect(() => {
        if(window !== "undefined"){
          setShowComponent(true);
        }
    },[])

  return (
    showComponent &&
    <>
        <Navbar/>
        <div className={` ${styles.contact_container} ${styles.loading_rel} `}>
            <Headers hb="Contact" hf="get in touch" />

            <div className={` row ${styles.contact_main_con} py-5`}>

                <div className={`col-lg-4 col-sm-12  ${styles.inner_main_con}  `}>
                   <h3 className='text-uppercase pb-2 fw-bold'>don't be shy!</h3>
                   <p className='mb-4' style={{
                    fontSize:15
                   }}>
                   Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                   </p>

                   <div className="row my-3">
                    <div className="col-sm-2">
                        <HiMailOpen className={ ` ${styles.contact_icons} text-center align-middle  `} style={{
                            color: "#ffb400"
                        }} />
                    </div>
                    <div className="col-sm-10">
                        <span className='text-uppercase' style={{
                            color:'grey'
                        }} >male me</span> <br />
                        <span>monishbk17@gmai.com</span>
                    </div>
                   </div>

                   <div className="row my-3">
                    <div className="col-sm-2">
                        <MdCall className={ ` ${styles.contact_icons} text-center align-middle  `} style={{
                            color: "#ffb400"
                        }} />
                    </div>
                    <div className="col-sm-10">
                        <span className='text-uppercase' style={{
                            color:'grey'
                        }} >call me</span> <br />
                        <span>8310582079</span>
                    </div>
                   </div>

                   <div className='d-flex justify-content-between  mb-5 '>
                    <div className={`${styles.inner_left_contact}`}>

                        <Link href={"https://www.facebook.com/profile.php?viewas=100000686899395&id=100008324416789"}  
                         target='_blank'
                         >
                            <div className={`${styles.social_icons}`}>
                                <FaFacebookF />
                            </div>
                        </Link>
                        <Link href={"https://github.com/MonishBK"} target='_blank'>
                            <div className={`${styles.social_icons}`}>
                                <BsTwitter />
                            </div>
                        </Link>
                        <Link href={"https://github.com/MonishBK"} target='_blank'>
                            <div className={`${styles.social_icons}`}>
                                <BsGithub />
                            </div>
                        </Link>
                        <div className={`${styles.social_icons}`}>
                            <BsLinkedin />
                        </div>

                    </div>
                   </div>

                </div>



                <div className="col-lg-8 col-sm-12 px-5">
                    <form method='POST' className={`${styles.form_div}`}>
                        <div className="row pb-4">
                            
                            <div className={` ${styles.inputs_div} col-sm-4 `}>
                                <input 
                                type="text"
                                name="name"
                                value={contactData.name}
                                onChange={inputEvent}
                                className="form-control py-2 px-3 "
                                id="u_name" 
                                style={{
                                    borderRadius:15,
                                    boxShadow:'none',
                                    backgroundColor:'#252525',
                                    border:'none',
                                    color:'#fff'
                                }}
                                placeholder="YOUR NAME"
                                 />
                            </div>

                            <div className={` ${styles.inputs_div} col-sm-4 `}>
                                <input 
                                type="email" 
                                name="email"
                                value={contactData.email}
                                onChange={inputEvent}
                                className="form-control py-2 px-3 " 
                                id="u_mail"
                                style={{
                                    borderRadius:15,
                                    boxShadow:'none',
                                    backgroundColor:'#252525',
                                    border:'none',
                                    color:'#fff'
                                }} 
                                placeholder="YOUR EMAIL" 
                                />
                            </div>

                            <div className={` ${styles.inputs_div} col-sm-4 `}>
                                <input 
                                type="text" 
                                name="subject"
                                value={contactData.subject}
                                onChange={inputEvent}
                                className="form-control py-2 px-3 " 
                                id="sub"
                                style={{
                                    borderRadius:15,
                                    boxShadow:'none',
                                    backgroundColor:'#252525',
                                    border:'none',
                                    color:'#fff'
                                }}
                                 placeholder="YOUR SUBJECT"
                                  />
                            </div>

                        </div>
                        <div className="row px-2 pb-4">
                        <textarea 
                        name='message'
                        value={contactData.message}
                        onChange={inputEvent}
                        class="form-control  py-2 px-3" 
                        id="msg"
                        style={{
                            borderRadius:20,
                            boxShadow:'none',
                            backgroundColor:'#252525',
                            border:'none',
                            color:'#fff'
                        }}
                        placeholder='YOUR MESSAGE'
                        rows="6"
                        ></textarea>
                        </div>

                        <Link href='/About' className={`main_btn`}  onClick={PostData} >
                            <span className={`btn_text`} >send message</span>
                            <span  className={`arrow_mark`}>
                                <SiMinutemailer className='fw-bolder fs-3'  />
                            </span>
                             </Link>

                    </form>
                </div>
            </div>
            <ToastContainer
                // position="top-center"
                position="bottom-center"
                style={{ fontSize: "1rem" }}
            />
        
            {
              loading ? <div className={`${styles.loading}`} > </div> : ""
            }

        </div>
    </>
  )
}

export default Contact