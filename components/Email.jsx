import React,{useState,useRef} from 'react'
import emailjs from "@emailjs/browser"
import {motion} from 'framer-motion'
import Letter from './Letter'

const ContactItem = () => {
  const formRef = useRef()
  const [message,setMessage] = useState(false)
  const [name,setName] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)
    emailjs.sendForm('service_', 'template_nwf09qo', formRef.current, 'LRJ2r3vEhgz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
    {!message?
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col border border-darkBlack justify-between rounded items-center  space-y-6 p-6'>
        <input type="text" name='user_name' className='outline-none border rounded py-2 pl-2 w-full border-darkBlack text-darkBlack peer' placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
        <input type="email" name='user_email' className='outline-none border rounded  w-full py-2 pl-2 border-darkBlack text-darkBlack ' placeholder='Email' required></input>
        <textarea type="text" name='message' className='outline-none border rounded w-full py-2 pl-2 h-[250px] border-darkBlack text-darkBlack' placeholder='Message' required></textarea>
      <button className='bg-darkBlack self-center text-paleWhite p-2 rounded tracking-widest'>CONTACT</button>
    </form>:
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}} >
      <Letter name={name}></Letter>
    </motion.div>
    }
    </>
  )
}

export default ContactItem