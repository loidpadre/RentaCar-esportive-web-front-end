import { useState } from 'react'
import './App.css'
import CardArea from './components/CardsArea/CardArea'
import { Banner } from './components/banner/Banner'
import { Body } from './components/body/body'

import { NavBar } from "./components/navbar/NavBar"
import { Second } from './components/secondarea/Second'
import { Cards, Testemunial } from './data/data'
import Promotion from './components/promotion/promotion'
import TestCard from './testemunial/testemunial'

function App() {

  const [cards, setCards] = useState(Cards)
  const [testemunial, setTestemunial] = useState(Testemunial)
  return (
    <div>
      <NavBar />
      <Banner />
      <Body />
      <Second />
      <CardArea cards={cards} />
      <Promotion />
      <TestCard TestCard={testemunial} />
    </div>
  )
}

export default App
