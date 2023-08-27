import Image from 'next/image';
import { Inter, PT_Serif, Arvo } from 'next/font/google';
import styles from './Projeto.module.css';

const inter = Inter({weight:"400", subsets: ['latin'] });
const ptSerif = PT_Serif({weight: "700", subsets: ['latin']});
const arvo = Arvo({weight: "400", subsets: ['latin'] });

interface ProjetoProps {
  nomeProjeto: string;
  imagemProjeto: string;
  descricao: string;
  site: string;
  repo: string;
  nomeStatus: string; imagemStatus: string;
  //array
  tecnologias: Array<{ nome: string; imagem: string }>;
}
const Projeto: React.FC<ProjetoProps> = ({
nomeProjeto,
imagemProjeto,
descricao,
site,
repo,
nomeStatus,
imagemStatus,
tecnologias,
}) => {
  return (
    <div className={styles.projeto__item}>
      <div className={styles.projeto__previa}>
        <Image 
          src={imagemProjeto}
          alt={nomeProjeto}
          width={380}
          height={200}
          loading='lazy'
        />

        <div className={styles.tecnologias}>
        
        {tecnologias.map((item, index) => (
          <Image 
            key={index}
            src={item.imagem}
            alt={item.nome}
            title={item.nome}
            width={35}
            height={35}
            loading='lazy'
            className={styles.tecnologias__img}
          />
          ))}

        </div>
      </div>

      <div className={styles.projeto__info}>
        <div className={styles.projeto__cabecalho}>
          <h2 className={ptSerif.className}>{nomeProjeto}</h2>
          <span className={inter.className} title={nomeStatus}>
            status
            <Image 
              src={imagemStatus}
              alt={nomeProjeto + nomeStatus}
              width={16}
              height={16}
              loading='lazy'
            />
          </span>
        </div>

        <div className={styles.projeto__detalhes}>
          <p className={arvo.className}>{descricao}</p>
        </div>

        <div className={styles.projeto__links}>
          <a href={site} className={arvo.className}>
            <Image 
              src={'/projeto-status/web.png'}
              alt='Visualizar site Genius'
              width={16}
              height={16}
              loading='lazy'
            />
            Visualizar Site
          </a>
          <a href={repo} className={arvo.className}>
            <Image 
              src={'/projeto-status/code.png'}
              alt='Repositorio Genius'
              width={16}
              height={16}
              loading='lazy'
            />
            REPOSITÓRIO
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projeto;