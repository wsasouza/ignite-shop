import Image from 'next/future/image'

import tShirt1 from '../assets/t-shirt-1.png'
import tShirt2 from '../assets/t-shirt-2.png'

import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tShirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tShirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
