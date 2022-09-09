import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import { globalStyles } from '../styles/global'
import Image from 'next/future/image'
import Head from 'next/head'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
