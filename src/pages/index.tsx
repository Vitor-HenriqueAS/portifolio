import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Projeto from '@/components/Projeto';

import projetosApi from '@/pages/api/projetos.json'

import { Inter, PT_Serif, Arvo } from 'next/font/google';

const inter = Inter({weight:"400", subsets: ['latin'] });
const ptSerif = PT_Serif({weight: "700", subsets: ['latin']});
const arvo = Arvo({weight: "400", subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio | Vitor Henrique</title>
        <meta name="description" content="Explore meu portfólio exibindo uma coleção diversificada de projetos criativos. De desenvolvimento web a design, descubra meu trabalho em front-end, back-end, design de interface do usuário e muito mais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Image 
            src="/logo.png" 
            alt="Logo Portifolio | Vitor Henrique" 
            className={styles.logo__img}
            width={80}
            height={70}
            priority
          />

          <div>
            <p className={ptSerif.className}>VITOR HENRIQUE</p>
            <p className={arvo.className}>desenvolvedor web</p>
          </div>
        </div>

        <div className={styles.header__menu}>
          <input type='checkbox' id='menu-toggle' />
          <label htmlFor='menu-toggle' className={styles.header__menuIcon} title='Menu'>
            <div className={styles.header__bar}></div>
            <div className={styles.header__bar}></div>
            <div className={styles.header__bar}></div>
          </label>

          {/* <nav className={styles.header__nav}>
            <ul>
              <li>Inicio</li>
              <li>Sobre Mim</li>
              <li>Projetos</li>
            </ul>
          </nav> */}
        </div>
      </header>

      <main>
        <section className={styles.sobreMim}>
          <div className={styles.sobreMim__content}>
            <span>Olá, eu sou</span>
            <h1 className={ptSerif.className}>Vitor Henrique</h1>
            <h3 className={inter.className}>Desenvolvedor Front End</h3>
            <p className={inter.className}>
              Apaixonado por tecnologia que decidiu trilhar o caminho da programação. 
              Em busca de constante evolução.
            </p>
            <p className={inter.className}>
              Atualmente estou cursando Sistemas de Informação e focando no desenvolvimento Web.
            </p>

            <div className={styles.sobreMim__redesSociais}>
              <a href="" target='_blank'>
              <Image 
                src="/redes-sociais/github.svg" 
                alt="Logo do Github" 
                width={51}
                height={51}
                className={styles.redesSociais__icon}
                title='Github'
                priority
              />
              </a>
              <a href="" target='_blank'>
              <Image 
                src="/redes-sociais/linkedin.svg" 
                alt="Logo do Linkedin" 
                width={51}
                height={51}
                className={styles.redesSociais__icon}
                title='Linkedin'
                priority
              />
              </a>
            </div>
          </div>

          <div className={styles.perfil}>
            <Image
              src="/perfil.jpg" 
              alt="Foto de Perfil" 
              width={380}
              height={380}
              priority
            />
            <div className={styles.perfil__habilidades}>
              <Image 
                src="/tecnologias/html.png" 
                alt="html" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/css.png" 
                alt="css" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/javascript.png" 
                alt="javascript" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/react.png" 
                alt="react" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/vue.png" 
                alt="vue" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/sass.png" 
                alt="sass" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/python.png" 
                alt="python" 
                width={30}
                height={30}
                loading='lazy'
              />

              <Image 
                src="/tecnologias/git.png" 
                alt="git" 
                width={30}
                height={30}
                loading='lazy'
              />
            </div>
          </div>
        </section>

        <section className={styles.projetos}>
          <h2 className={`${styles.projeto__cabecalho} ${ptSerif.className}`}> &#60; PROJETOS /&#62;</h2>
        
          <div className={styles.projetos__content}>
            {projetosApi.map((item, index) => (
              <Projeto 
                key={index}
                imagemProjeto={item.imagem}
                tecnologias={item.tecnologias}
                nomeProjeto={item.nome}
                nomeStatus={item.status[0].nome}
                imagemStatus={item.status[0].imagem}
                descricao={item.descricao}
                site={item.site}
                repo={item.repo}
              />
            ))}
          </div>
        </section>
        
      </main>

      {/*
        <section>
          Projetos
        </section>
      </main>

      <footer>
        <hr />
        Direitos
      </footer> */}
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      > */}
    </>
  )
}
