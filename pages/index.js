import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina do Will</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className={styles.main}>
        <h1 className={styles.title}>
         Bem vindo ao meu mundo, este é meu github, <a href="https://github.com/wilferwillian">acesse!</a>
        </h1>
        <h2 className={styles.title}> Esse é meu linkedin,<a href="https://www.linkedin.com/in/willian-ferreira-01162829/">conheça!</a> </h2>
        </main>
       
    </div>
  )
}
