import React, { useState } from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [succeMsg, setSuccmsg] = useState("");

  // *************** email validator
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrmsg("Name is required!")
    }
    else if (email === "") setErrmsg("Email is required!");
    else if (!emailValidation(email)) {
      setErrmsg("Give a valid email!")
    }
    else if (subject === "") setErrmsg("Subject is required!");
    else if (phone === "") setErrmsg("Phone number is required!");
    else if (message === "") setErrmsg("Message is required!");
    else {
      setSuccmsg("Message send successfully!");
      setName("")
      setMessage("");
      setSubject("");
      setPhone("");
      setEmail("");
      setErrmsg("");
    }
    console.log(name, phone, subject, email, message);



  }
  return (
    <section id='contact' className='w-full h-auto pb-20 flex flex-col border-b-[1px] 
    border-b-black'>

      <div className='w-full flex justify-center items-center text-center'>
        <Title title="New tools, dev or programming doubts or even a coffee" des="Contact with me" />
      </div>

      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
          <ContactLeft />
          <div className='lgl:w-[60%] w-full h-full flex flex-col gap-8 lgl:p-8 p-4 rounded-lg shadow-shadowone
                          bg-gradient-to-r from-[#1e2024] to-[#20272b]'>
            <form className='w-full flex flex-col lgl:gap-6 gap-4 py-2'>
              {
                errmsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                shadow-shadowone text-center text-designColor text-base tracking-wide animate-bounce
                '>{errmsg}</p>
              }
              {
                succeMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                shadow-shadowone text-center text-green text-base tracking-wide animate-bounce'>{succeMsg}</p>
              }
              <div className='w-full flex flex-col lgl:flex-row gap-10'>
                <div className='lgl:w-1/2 w-full flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Name</p>
                  <input onChange={(e) => setName(e.target.value)} value={name} className={`${errmsg === "Name is required!" && "outline-designColor"}  w-full h-12 rounded-lg 
                                bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor
                                outline-none focus-visible: border-b-transparent duration-300
                        `} type="text" name="name" id="name " />
                </div>
                <div className='lgl:w-1/2 w-full flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone number</p>
                  <input onChange={(e) => setPhone(e.target.value)} value={phone} className={`${errmsg === "Phone number is required!" && "outline-designColor"}  w-full h-12 rounded-lg 
                                bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor
                                outline-none focus-visible: border-b-transparent duration-300
                        `} type="text" />
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase  tracking-wide'>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${errmsg === "Email is required!" && "outline-designColor"}  w-full h-12 rounded-lg 
                                bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor
                                outline-none focus-visible: border-b-transparent duration-300
                        `} type="text" />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase  tracking-wide'>Subject</p>
                <input onChange={(e) => setSubject(e.target.value)} value={subject} className={`${errmsg === "Subject is required!" && "outline-designColor"}  w-full h-12 rounded-lg 
                                bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor
                                outline-none focus-visible: border-b-transparent duration-300
                        `} type="text" />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase  tracking-wide'>message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={` ${errmsg === "Message is required!" && "outline-designColor"} w-full rounded-lg bg-[#191b1e] text-lightText py-2 px-4 active:outline-none focus-visible:outline-designColor
                                outline-none focus-visible:duration-300 resize-none`}
                  name="message" id="message" cols="30" rows="8"></textarea>

              </div>

              <div className='flex fle-col gap-4'>
                <button onClick={handleSend} className='w-full rounded-lg h-12 bg-[#141518] text-base text-gray-400 tracking-wider
                        uppercase hover:text-white duration-300 hover:border-1[px] hover: border-designColor' type='submit'>send message</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
