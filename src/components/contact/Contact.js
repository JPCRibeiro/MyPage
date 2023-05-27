import React, { useState } from "react";
import { AlertError, ContactBox, ContactInput, FormButton, FormContact, FormLabel, ContactEmail, FooterLinks, FooterLink } from "../../styles/Contact.styled";
import { Reveal } from "../Reveal";
import emailjs from "@emailjs/browser";
import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Form() {
  const [errorMessages, setErrorMessages] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [btnText, setBtnText] = useState('Enviar!');

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = [
      { name: "name", value: name, errorMessage: "Preencha o campo acima!" },
      { name: "email", value: email, errorMessage: "Preencha o campo acima!", formatErrorMessage: "Preencha o campo corretamente!" },
      { name: "message", value: message, errorMessage: "Preencha o campo acima!" },
    ];

    var formatoEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    const newErrorMessages = {};

    inputs.forEach((input) => {
      if (input.value === "") {
        newErrorMessages[input.name] = input.errorMessage;
      } else if (input.name === "email" && !input.value.match(formatoEmail)) {
        newErrorMessages[input.name] = input.formatErrorMessage;
      } else {
        newErrorMessages[input.name] = "";
      }
    });

    setErrorMessages(newErrorMessages);

    if (name === "" || email === "" || message === "" || newErrorMessages.email) {
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message
    }

    emailjs.send("service_4yheyiq", "template_awwrwkb", templateParams, "m7Zh285CWsdBULjII")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('');
      setEmail('');
      setMessage('');
      setBtnText('Contato Enviado!')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return(
    <FormContact id="form" onSubmit={handleSubmit} method="post">
      <Reveal width="100%">
        <ContactBox>
          <FormLabel htmlFor="nome">Nome</FormLabel>
          <ContactInput id="nome" placeholder="João Pedro *" onChange={(e) => setName(e.target.value)} value={name}/>
          <AlertError>{errorMessages.name}</AlertError>
        </ContactBox>
      </Reveal>
      <Reveal width="100%">
        <ContactBox>
          <FormLabel htmlFor="email">Email</FormLabel>
          <ContactInput id="email" placeholder="joao@pedro.com *" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <AlertError>{errorMessages.email}</AlertError>
        </ContactBox>
      </Reveal>
      <Reveal width="100%">
        <ContactBox>
          <FormLabel htmlFor="mensagem">Mensagem</FormLabel>
          <ContactInput id="mensagem" placeholder="Olá... *" onChange={(e) => setMessage(e.target.value)} value={message}/>
          <AlertError>{errorMessages.message}</AlertError>
        </ContactBox>
      </Reveal>
      <Reveal width="100%">
        <FormButton type="submit">{btnText}</FormButton>
      </Reveal>
      <Reveal width="100%">
        <a href="mailto:jopedroribeiro9@gmail.com">
          <ContactEmail>
            <AiFillMail size="2.4rem" />
            <span>jopedroribeiro9@gmail.com</span>
          </ContactEmail>
        </a>
      </Reveal>
      <FooterLinks>
        <Reveal>
          <FooterLink 
            href="https://github.com/JPCRibeiro"
            target="blank"
            rel="nofollow noopener noreferrer"
          >
            <BsGithub size="2.4rem" />
          </FooterLink>
        </Reveal>
        <Reveal>
          <FooterLink 
            href="https://www.linkedin.com/in/jpcribeiro/"
            target="blank"
            rel="nofollow noopener noreferrer"
          >
            <BsLinkedin size="2.4rem" />
          </FooterLink>
        </Reveal>
      </FooterLinks>
    </FormContact>
  )
}