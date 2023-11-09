import { useState } from 'react'
import './App.css'
import CardArea from './components/CardsArea/CardArea'
import { Banner } from './components/banner/Banner'
import { Body } from './components/body/body'

import { NavBar } from "./components/navbar/NavBar"
import { Second } from './components/secondarea/Second'
import { Cards, Testemunial, QuentionFrequent } from './data/data'
import Promotion from './components/promotion/promotion'
import TestCard from './testemunial/testemunial'
import Question from './components/question/Questions'

function App() {

  const [cards, setCards] = useState(Cards)
  const [testemunial, setTestemunial] = useState(Testemunial)
  const [questions, setQuestions] = useState(QuentionFrequent)
  return (
    <div>
      <NavBar />
      <Banner />
      <Body />
      <Second />
      <CardArea cards={cards} />
      <Promotion />
      <TestCard TestCard={testemunial} />
      <Question questions={questions} />
    </div>
  )
}

export default App
