import type { NextPage } from 'next'
import Head from 'next/head'
import MyPhoto from '../component/myPhoto/MyPhoto'
import Nav from '../component/Nav'

import s from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={s.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <nav className={s.nav}>
      <Nav></Nav>

    </nav>
      <main className={s.main}>
        <MyPhoto></MyPhoto>
     
      </main>

      <footer className={s.footer}>
       
      </footer>
    </div>
  )
}

export default Home
