"use client";


import {Input} from "./ui/input"
import {Button} from "./ui/button"
import {Textarea} from "./ui/textarea"
import {User, MailIcon, ArrowRightIcon, MessageSquare} from "lucide-react"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
require("dotenv").config()
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y5idlzi', 'template_xbb7wsd', form.current, {
        publicKey: (process.env.PUBLIC_KEY),
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
<div className="relative flex items-center">
    
    <Input type="name" id="name" name="user_name"   placeholder="Name"/>
    <User className="absolute right-6" size={20}/>
</div>
<div className="relative flex items-center">
    <Input type="email" id="email" name="user_email" placeholder="Email"/>
    <MailIcon className="absolute right-6" size={20}/>
</div>
<div className="relative flex items-center">
    <Textarea placeholder="Type your message here."/>
    <MessageSquare className="absolute top-4 right-6" size={20}/>
</div>
<Button className="flex items-center gap-x-1 max-w-[166px]">Let's Talk
<ArrowRightIcon size={20}/>
</Button>
    </form>

  )
}

export default Form