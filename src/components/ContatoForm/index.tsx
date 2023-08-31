import React, { useState} from 'react';
import emailjs from '@emailjs/browser'
import * as EmailValidator from 'email-validator';

import styles from './Contato.module.css';
import { Inter, Arvo } from 'next/font/google';

const inter = Inter({weight:"400", subsets: ['latin'] });
const arvo = Arvo({weight: "400", subsets: ['latin'] });

const dominio1 = process.env.DOMINIO_1;
const dominio2 = process.env.DOMINIO_2;
const dominio3 = process.env.DOMINIO_3;
const dominio4 = process.env.DOMINIO_4;
const dominio5 = process.env.DOMINIO_5;
const dominio6 = process.env.DOMINIO_6;
const servicoId = process.env.SERVICO_ID ?? 'sem servico';
const templateId = process.env.TEMPLATE_ID ?? 'sem template';
const publicKey = process.env.PUBLIC_KEY;

if (!dominio1 || !dominio2 || !dominio3 || !dominio4 || !dominio5 || !dominio6 || !servicoId || !templateId || !publicKey) {
  throw new Error("Variáveis de ambiente não definidas.");
}

export default function ContatoForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidNome, setIsValidNome] = useState<boolean>(true);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const allowedDomains = [dominio1, dominio2, dominio3, dominio4, dominio5, dominio6];

  const handleNomeChange = (nome: string) => {
    const regex = /^[^\d]*$/;
    setNome(nome);
    if(regex.test(nome)) {
      setIsValidNome(true)
    }else {
      setIsValidNome(false)
    }
    setMensagemEnviada(false)
  }

  const handleMensagemChange = (mensagem: string) => {
    setMensagem(mensagem);
    setMensagemEnviada(false)
  }

  const handleEmailChange = (email: string) => {
    setMensagemEnviada(false)
    setEmail(email);
    if (email != '') {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }

    const parts = email.split('@');
    if (parts.length === 2) {
      const domain = parts[1].toLowerCase();
      if (allowedDomains.includes(domain) === (EmailValidator.validate(email))) {
        setIsValidEmail(EmailValidator.validate(email));
      }
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if(nome === '' || email === '' || mensagem === '' || !isValidEmail || !isValidNome) {
      alert('Preencha todos os campos')
    } else {
        const templateParams = {
          from_name: nome,
          message: mensagem,
          email: email
        }

        emailjs.send(servicoId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("EMAIL ENVIADO : ", response.status, response.text)
          setNome('')
          setMensagem('')
          setEmail('')
          setMensagemEnviada(true)
        }, (error) => {
          console.log("ERRO : ", error)
        })
      }
  };

  return (
      <form onSubmit={sendEmail} className={`${inter.className} ${styles.contato__form}`}>

        <h2 className={styles.contato__form__title}>Contato</h2>

        <div className={styles.contato__formBox}>
          <label htmlFor='contatoNome'>Nome</label>
          <input 
            type="text" 
            id="contatoNome" 
            minLength={3} 
            maxLength={40}  
            className={styles.contato__formInput} 
            value={nome} 
            onChange={(e) => handleNomeChange(e.target.value)} 
            autoComplete="off" 
            required 
          />
          {!isValidNome && <p style={{ color: 'red' }}>Por favor, insira um nome válido.</p>}
        </div>

        <div className={styles.contato__formBox}>
          <label htmlFor='contatoEmail'>Email</label>
          <input 
            type="text" 
            id="contatoEmail" 
            className={styles.contato__formInput} 
            value={email} onChange={(e) => handleEmailChange(e.target.value)}
            autoComplete="off" required 
            style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
          />
          {!isValidEmail && <p style={{ color: 'red' }}>Por favor, insira um email válido.</p>}
        </div>

        <div className={styles.contato__formBox}>
          <label htmlFor='contatoMensagem'>Mensagem</label>
          <textarea 
            id="contatoMensagem" 
            value={mensagem} 
            className={styles.contato__formInput} 
            onChange={(e) => handleMensagemChange(e.target.value)} 
            autoComplete="off" 
            required 
          />
        </div>

        <button className={`${arvo.className} ${styles.contato__btnEnviar}`} type='submit'>Enviar mensagem</button>
        {isValidEmail && mensagemEnviada && <p style={{ color: 'green' }}>Email Enviado!</p>}
    </form>
  );
}
