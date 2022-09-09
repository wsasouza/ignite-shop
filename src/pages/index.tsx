import Head from 'next/head'
import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.8)',
    transition: '0.5s',
  },
})

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Ignite Shop by Rocketseat" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ignite Shop</title>
      </Head>

      <h1>Hello Next.js</h1>
      <Button>Teste</Button>
    </div>
  )
}
